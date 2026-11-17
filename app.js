// Ứng dụng thi thử IT3011 - Cấu trúc dữ liệu & Thuật toán
(function () {
  const STORAGE_KEY = 'it3011_dsa_mock_history_v1';

  let state = {
    currentExam: null,
    userAnswers: {}, // qid -> number (for mcq) or string (for short)
    flagged: {},     // qid -> boolean
    submitted: false,
    secondsLeft: 50 * 60,
    startTimeMs: 0,
    timerInterval: null,
    reviewFilter: 'all'
  };

  // DOM Elements
  const dashboardView = document.getElementById('dashboardView');
  const examView = document.getElementById('examView');
  const examGrid = document.getElementById('examGrid');
  const completedCountStat = document.getElementById('completedCountStat');

  const activeExamTitle = document.getElementById('activeExamTitle');
  const timerBox = document.getElementById('timerBox');
  const timerDisplay = document.getElementById('timerDisplay');
  const answeredCounter = document.getElementById('answeredCounter');
  const progressFill = document.getElementById('progressFill');

  const submitExamBtn = document.getElementById('submitExamBtn');
  const bottomSubmitBtn = document.getElementById('bottomSubmitBtn');
  const bottomSubmitBar = document.getElementById('bottomSubmitBar');
  const retakeExamBtn = document.getElementById('retakeExamBtn');
  const backToDashBtn = document.getElementById('backToDashBtn');
  const brandHomeBtn = document.getElementById('brandHomeBtn');

  const questionsContainer = document.getElementById('questionsContainer');
  const mcqPalette = document.getElementById('mcqPalette');
  const shortPalette = document.getElementById('shortPalette');
  const resultSummaryCard = document.getElementById('resultSummaryCard');

  const confirmModal = document.getElementById('confirmModal');
  const confirmModalMsg = document.getElementById('confirmModalMsg');
  const cancelSubmitBtn = document.getElementById('cancelSubmitBtn');
  const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Theme initialization
  if (localStorage.getItem('dsa_theme') === 'dark') {
    document.body.classList.add('dark');
    themeIcon.textContent = '☀️';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('dsa_theme', isDark ? 'dark' : 'light');
  });

  function loadHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveHistory(examId, record) {
    const history = loadHistory();
    const prev = history[examId];
    if (!prev || record.score >= prev.score) {
      history[examId] = record;
    } else {
      history[examId].lastAttempt = record;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function normalizeShortAnswer(val) {
    if (val === undefined || val === null) return '';
    return String(val).trim().replace(/\s+/g, '').toLowerCase();
  }

  function isQuestionCorrect(q, userVal) {
    if (userVal === undefined || userVal === null || userVal === '') return false;
    if (q.type === 'mcq') {
      return Number(userVal) === q.answer;
    } else {
      const normUser = normalizeShortAnswer(userVal);
      return q.accepted.some(acc => normalizeShortAnswer(acc) === normUser);
    }
  }

  // Render Dashboard
  function renderDashboard() {
    clearInterval(state.timerInterval);
    dashboardView.classList.remove('hidden');
    examView.classList.add('hidden');

    const history = loadHistory();
    const completedCount = Object.keys(history).length;
    completedCountStat.textContent = `${completedCount}/10`;

    examGrid.innerHTML = '';
    EXAMS_DATA.forEach(exam => {
      const rec = history[exam.id];
      const card = document.createElement('div');
      card.className = 'exam-card';
      card.innerHTML = `
        <div>
          <div class="exam-card-top">
            <span class="exam-num-tag">ĐỀ THI THỬ #${String(exam.id).padStart(2, '0')}</span>
            <span class="exam-score-badge ${rec ? 'done' : ''}">
              ${rec ? `Điểm cao nhất: ${rec.score.toFixed(2)}/10` : 'Chưa làm'}
            </span>
          </div>
          <h3>${escapeHtml(exam.title)}</h3>
          <div class="exam-meta">
            <span>📝 33 câu hỏi</span>
            <span>⏱ 50 phút</span>
            <span>🎯 Thang điểm 10</span>
          </div>
        </div>
        <div class="exam-card-actions">
          <button class="btn btn-primary start-exam-btn" data-id="${exam.id}">
            ${rec ? 'Làm lại đề này' : 'Bắt đầu làm bài'}
          </button>
        </div>
      `;
      examGrid.appendChild(card);
    });

    document.querySelectorAll('.start-exam-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.id);
        startExam(id);
      });
    });
  }

  function startExam(examId) {
    const exam = EXAMS_DATA.find(e => e.id === examId);
    if (!exam) return;

    state = {
      currentExam: exam,
      userAnswers: {},
      flagged: {},
      submitted: false,
      secondsLeft: exam.durationMinutes * 60,
      startTimeMs: Date.now(),
      timerInterval: null,
      reviewFilter: 'all'
    };

    dashboardView.classList.add('hidden');
    examView.classList.remove('hidden');
    resultSummaryCard.classList.add('hidden');
    submitExamBtn.classList.remove('hidden');
    bottomSubmitBar.classList.remove('hidden');
    retakeExamBtn.classList.add('hidden');

    document.querySelectorAll('.review-only').forEach(el => el.classList.add('hidden'));

    activeExamTitle.textContent = exam.title;
    renderQuestions();
    renderPalette();
    updateProgress();
    startTimer();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerUI();
    state.timerInterval = setInterval(() => {
      state.secondsLeft--;
      updateTimerUI();
      if (state.secondsLeft <= 0) {
        clearInterval(state.timerInterval);
        finalizeSubmission(true);
      }
    }, 1000);
  }

  function updateTimerUI() {
    timerDisplay.textContent = formatTime(Math.max(0, state.secondsLeft));
    timerBox.classList.remove('warning', 'danger');
    if (state.secondsLeft <= 180) {
      timerBox.classList.add('danger');
    } else if (state.secondsLeft <= 600) {
      timerBox.classList.add('warning');
    }
  }

  function getDiffClass(diff) {
    if (diff === 'Dễ') return 'diff-easy';
    if (diff === 'Trung bình') return 'diff-med';
    return 'diff-hard';
  }

  function renderQuestions() {
    const exam = state.currentExam;
    questionsContainer.innerHTML = '';

    exam.questions.forEach(q => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `q-card-${q.id}`;

      const isFlagged = !!state.flagged[q.id];
      const userVal = state.userAnswers[q.id];
      const correct = state.submitted ? isQuestionCorrect(q, userVal) : false;

      if (state.submitted) {
        card.classList.add(correct ? 'review-correct' : 'review-wrong');
        const hasAnswered = userVal !== undefined && userVal !== null && String(userVal).trim() !== '';
        if (state.reviewFilter === 'correct' && !correct) card.classList.add('hidden');
        if (state.reviewFilter === 'wrong' && (correct || !hasAnswered)) card.classList.add('hidden');
        if (state.reviewFilter === 'unanswered' && hasAnswered) card.classList.add('hidden');
      }

      let bodyHtml = '';
      if (q.type === 'mcq') {
        const letters = ['A', 'B', 'C', 'D'];
        bodyHtml = `<div class="options-list">` + q.options.map((opt, idx) => {
          let cls = 'option-item';
          if (state.submitted) {
            cls += ' disabled';
            if (idx === q.answer) cls += ' opt-correct';
            else if (userVal !== undefined && Number(userVal) === idx) cls += ' opt-wrong';
          } else if (userVal !== undefined && Number(userVal) === idx) {
            cls += ' selected';
          }
          return `
            <div class="${cls}" data-qid="${q.id}" data-opt="${idx}">
              <div class="opt-letter">${letters[idx]}</div>
              <div class="opt-text">${escapeHtml(opt)}</div>
            </div>
          `;
        }).join('') + `</div>`;
      } else {
        const valStr = userVal !== undefined ? escapeHtml(userVal) : '';
        let fbHtml = '';
        if (state.submitted) {
          if (correct) {
            fbHtml = `<div class="short-feedback ok">✓ Chính xác! Đáp án: ${escapeHtml(q.answer)}</div>`;
          } else {
            fbHtml = `<div class="short-feedback bad">✕ Chưa đúng (Bạn điền: ${valStr || 'Bỏ trống'}). Đáp án đúng: <strong>${escapeHtml(q.answer)}</strong></div>`;
          }
        }
        bodyHtml = `
          <div class="short-answer-box">
            <input type="text" class="short-input" data-qid="${q.id}" value="${valStr}"
              placeholder="Nhập đáp án (VD: 42 hoặc -1)..." ${state.submitted ? 'disabled' : ''} />
            ${fbHtml}
          </div>
        `;
      }

      const expHtml = state.submitted ? `
        <div class="explanation-box">
          <div class="explanation-title">💡 Đáp án &amp; Lời giải ngắn gọn:</div>
          <div>${escapeHtml(q.explanation)}</div>
        </div>
      ` : '';

      card.innerHTML = `
        <div class="q-header">
          <div class="q-badges">
            <span class="q-num">Câu ${q.id} (${q.type === 'mcq' ? 'Trắc nghiệm' : 'Trả lời ngắn'})</span>
            <span class="topic-badge">${escapeHtml(q.topic)}</span>
            <span class="diff-badge ${getDiffClass(q.difficulty)}">${escapeHtml(q.difficulty)}</span>
          </div>
          <button class="flag-btn ${isFlagged ? 'flagged' : ''}" data-qid="${q.id}">
            ${isFlagged ? '🚩 Đã đánh dấu' : '🏳 Đánh dấu'}
          </button>
        </div>
        <div class="q-text">${escapeHtml(q.text)}</div>
        ${q.code ? `<pre class="code-block"><code>${escapeHtml(q.code)}</code></pre>` : ''}
        ${bodyHtml}
        ${expHtml}
      `;

      questionsContainer.appendChild(card);
    });

    // Attach event listeners
    if (!state.submitted) {
      document.querySelectorAll('.option-item').forEach(el => {
        el.addEventListener('click', () => {
          const qid = Number(el.dataset.qid);
          const optIdx = Number(el.dataset.opt);
          state.userAnswers[qid] = optIdx;
          updateSingleMcqCard(qid);
          updatePaletteItem(qid);
          updateProgress();
        });
      });

      document.querySelectorAll('.short-input').forEach(inp => {
        inp.addEventListener('input', () => {
          const qid = Number(inp.dataset.qid);
          const v = inp.value;
          if (v.trim() === '') {
            delete state.userAnswers[qid];
          } else {
            state.userAnswers[qid] = v;
          }
          updatePaletteItem(qid);
          updateProgress();
        });
      });
    }

    document.querySelectorAll('.flag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = Number(btn.dataset.qid);
        state.flagged[qid] = !state.flagged[qid];
        btn.classList.toggle('flagged', state.flagged[qid]);
        btn.innerHTML = state.flagged[qid] ? '🚩 Đã đánh dấu' : '🏳 Đánh dấu';
        updatePaletteItem(qid);
      });
    });
  }

  function updateSingleMcqCard(qid) {
    const card = document.getElementById(`q-card-${qid}`);
    if (!card) return;
    const selectedIdx = state.userAnswers[qid];
    card.querySelectorAll('.option-item').forEach(el => {
      el.classList.toggle('selected', Number(el.dataset.opt) === selectedIdx);
    });
  }

  function renderPalette() {
    mcqPalette.innerHTML = '';
    shortPalette.innerHTML = '';

    state.currentExam.questions.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'pal-btn';
      btn.id = `pal-btn-${q.id}`;
      btn.textContent = q.id;
      btn.addEventListener('click', () => {
        const target = document.getElementById(`q-card-${q.id}`);
        if (target) {
          target.classList.remove('hidden');
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      if (q.type === 'mcq') mcqPalette.appendChild(btn);
      else shortPalette.appendChild(btn);

      updatePaletteItem(q.id);
    });
  }

  function updatePaletteItem(qid) {
    const btn = document.getElementById(`pal-btn-${qid}`);
    if (!btn) return;
    const val = state.userAnswers[qid];
    const hasAns = val !== undefined && val !== null && String(val).trim() !== '';
    btn.classList.toggle('answered', hasAns);
    btn.classList.toggle('flagged', !!state.flagged[qid]);

    if (state.submitted) {
      const q = state.currentExam.questions.find(item => item.id === qid);
      const ok = isQuestionCorrect(q, val);
      btn.classList.remove('correct', 'wrong');
      btn.classList.add(ok ? 'correct' : 'wrong');
    }
  }

  function updateProgress() {
    const total = state.currentExam.questions.length;
    const answered = Object.keys(state.userAnswers).filter(k => {
      const v = state.userAnswers[k];
      return v !== undefined && v !== null && String(v).trim() !== '';
    }).length;
    answeredCounter.textContent = `${answered}/${total}`;
    progressFill.style.width = `${Math.round((answered / total) * 100)}%`;
  }

  function openSubmitModal() {
    const total = state.currentExam.questions.length;
    const answered = Object.keys(state.userAnswers).filter(k => {
      const v = state.userAnswers[k];
      return v !== undefined && v !== null && String(v).trim() !== '';
    }).length;
    const remaining = total - answered;
    if (remaining > 0) {
      confirmModalMsg.textContent = `Bạn đã làm ${answered}/${total} câu (còn ${remaining} câu chưa trả lời). Bạn có chắc chắn muốn nộp bài không?`;
    } else {
      confirmModalMsg.textContent = `Bạn đã hoàn thành tất cả ${total}/${total} câu hỏi. Xác nhận nộp bài để xem điểm và lời giải chi tiết?`;
    }
    confirmModal.classList.remove('hidden');
  }

  function finalizeSubmission(isAutoTimeout = false) {
    if (state.submitted) return;
    state.submitted = true;
    clearInterval(state.timerInterval);
    confirmModal.classList.add('hidden');

    const exam = state.currentExam;
    let mcqCorrect = 0;
    let shortCorrect = 0;

    const diffStats = {
      'Dễ': { ok: 0, total: 0 },
      'Trung bình': { ok: 0, total: 0 },
      'Khó': { ok: 0, total: 0 }
    };
    const topicStats = {};

    exam.questions.forEach(q => {
      const ok = isQuestionCorrect(q, state.userAnswers[q.id]);
      if (q.type === 'mcq' && ok) mcqCorrect++;
      if (q.type === 'short' && ok) shortCorrect++;

      diffStats[q.difficulty].total++;
      if (ok) diffStats[q.difficulty].ok++;

      if (!topicStats[q.topic]) topicStats[q.topic] = { ok: 0, total: 0 };
      topicStats[q.topic].total++;
      if (ok) topicStats[q.topic].ok++;
    });

    // Scale to 10 points: 30 MCQs * 0.25 = 7.5 pts; 3 Short Answers * (2.5 / 3) = 2.5 pts
    const score10 = (mcqCorrect * 0.25) + (shortCorrect * (2.5 / 3));
    const totalCorrect = mcqCorrect + shortCorrect;

    const elapsedSec = Math.min(exam.durationMinutes * 60, Math.round((Date.now() - state.startTimeMs) / 1000));

    saveHistory(exam.id, {
      score: score10,
      totalCorrect,
      date: new Date().toLocaleDateString('vi-VN')
    });

    // Update UI
    submitExamBtn.classList.add('hidden');
    bottomSubmitBar.classList.add('hidden');
    retakeExamBtn.classList.remove('hidden');
    resultSummaryCard.classList.remove('hidden');
    document.querySelectorAll('.review-only').forEach(el => el.classList.remove('hidden'));

    document.getElementById('resultHeadline').textContent = isAutoTimeout
      ? 'Hết giờ làm bài — Hệ thống đã tự động thu bài!'
      : (score10 >= 8 ? 'Xuất sắc! Bạn đã nắm rất vững kiến thức!' : score10 >= 5 ? 'Hoàn thành! Hãy xem lại các câu sai bên dưới.' : 'Cần ôn tập thêm! Xem kỹ lời giải chi tiết nhé.');
    document.getElementById('resultSubtext').textContent = `${exam.title} • Thang điểm: 30 câu trắc nghiệm (7.5đ) + 3 câu trả lời ngắn (2.5đ)`;
    document.getElementById('finalScoreDisplay').textContent = score10.toFixed(2);
    document.getElementById('resTotalCorrect').textContent = `${totalCorrect} / 33`;
    document.getElementById('resMcqCorrect').textContent = `${mcqCorrect} / 30`;
    document.getElementById('resShortCorrect').textContent = `${shortCorrect} / 3`;
    document.getElementById('resTimeSpent').textContent = formatTime(elapsedSec);

    const diffBreakdown = document.getElementById('diffBreakdown');
    diffBreakdown.innerHTML = Object.entries(diffStats).map(([k, v]) => `
      <div class="bd-row">
        <span>${escapeHtml(k)}</span>
        <strong>${v.ok}/${v.total} (${Math.round((v.ok / v.total) * 100)}%)</strong>
      </div>
    `).join('');

    const topicBreakdown = document.getElementById('topicBreakdown');
    topicBreakdown.innerHTML = Object.entries(topicStats).map(([k, v]) => `
      <div class="bd-row">
        <span>${escapeHtml(k)}</span>
        <strong>${v.ok}/${v.total}</strong>
      </div>
    `).join('');

    renderQuestions();
    renderPalette();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Filter buttons in Review Mode
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.reviewFilter = btn.dataset.filter;
      renderQuestions();
    });
  });

  // Modal & Navigation Events
  submitExamBtn.addEventListener('click', openSubmitModal);
  bottomSubmitBtn.addEventListener('click', openSubmitModal);
  cancelSubmitBtn.addEventListener('click', () => confirmModal.classList.add('hidden'));
  confirmSubmitBtn.addEventListener('click', () => finalizeSubmission(false));
  retakeExamBtn.addEventListener('click', () => startExam(state.currentExam.id));
  backToDashBtn.addEventListener('click', renderDashboard);
  brandHomeBtn.addEventListener('click', renderDashboard);

  // Initial load
  renderDashboard();
})();
