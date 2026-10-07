/**
 * SkillForge AI - Frontend Controller & Application Logic
 * Implements wizard orchestration, dynamic rendering, multi-view state synchronization,
 * interactive checklists, knowledge check quizzes, confetti celebrations, persistence,
 * theme toggling (Light / Dark), and complete user authentication system.
 */

(function () {
  'use strict';

  // Application State
  const state = {
    theme: 'light',
    currentUser: null, // { name, email, avatar, role, trackName }
    currentStep: 1,
    selectedRoleId: 'data-analyst',
    customRoleName: '',
    skillProficiencies: {}, // skillId -> 'none' | 'beginner' | 'proficient'
    weeklyHours: 12,
    timelineMonths: 4,
    learningStyle: 'balanced',
    budget: 'all',
    currentRoadmap: null,
    activeView: 'timeline',
    allPhasesExpanded: true,
    savedRoadmaps: [],
    studyStreak: 1
  };

  // DOM Elements
  const elements = {
    // Theme
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),

    // Nav
    brandHomeBtn: document.getElementById('brand-home-btn'),
    navNewBtn: document.getElementById('nav-new-btn'),
    navSavedBtn: document.getElementById('nav-saved-btn'),
    navExportBtn: document.getElementById('nav-export-btn'),
    savedCount: document.getElementById('saved-count'),

    // Auth & User Profile Nav Area
    navLoginBtn: document.getElementById('nav-login-btn'),
    navUserWrap: document.getElementById('nav-user-wrap'),
    navUserBtn: document.getElementById('nav-user-btn'),
    navUserAvatar: document.getElementById('nav-user-avatar'),
    navUserName: document.getElementById('nav-user-name'),
    userDropdownMenu: document.getElementById('user-dropdown-menu'),
    dropdownUserAvatar: document.getElementById('dropdown-user-avatar'),
    dropdownUserFullName: document.getElementById('dropdown-user-full-name'),
    dropdownUserRole: document.getElementById('dropdown-user-role'),
    dropdownUserEmail: document.getElementById('dropdown-user-email'),
    dropdownSavedBtn: document.getElementById('dropdown-saved-btn'),
    dropdownProfileBtn: document.getElementById('dropdown-profile-btn'),
    dropdownLogoutBtn: document.getElementById('dropdown-logout-btn'),

    // Welcome Ribbon
    userWelcomeRibbon: document.getElementById('user-welcome-ribbon'),
    ribbonUserName: document.getElementById('ribbon-user-name'),
    ribbonUserTrack: document.getElementById('ribbon-user-track'),
    btnRibbonQuickResume: document.getElementById('btn-ribbon-quick-resume'),

    // Auth Modal
    authModal: document.getElementById('auth-modal'),
    btnCloseAuth: document.getElementById('btn-close-auth'),
    authModalTitle: document.getElementById('auth-modal-title'),
    tabSignIn: document.getElementById('tab-sign-in'),
    tabSignUp: document.getElementById('tab-sign-up'),
    formSignIn: document.getElementById('form-sign-in'),
    formSignUp: document.getElementById('form-sign-up'),
    btnDemoAlex: document.getElementById('btn-demo-alex'),
    btnDemoSarah: document.getElementById('btn-demo-sarah'),
    btnSocialGoogle: document.getElementById('btn-social-google'),
    btnSocialGithub: document.getElementById('btn-social-github'),
    btnToggleSigninPass: document.getElementById('btn-toggle-signin-pass'),
    btnToggleSignupPass: document.getElementById('btn-toggle-signup-pass'),
    signinEmail: document.getElementById('signin-email'),
    signinPassword: document.getElementById('signin-password'),
    signupName: document.getElementById('signup-name'),
    signupEmail: document.getElementById('signup-email'),
    signupRole: document.getElementById('signup-role'),
    signupPassword: document.getElementById('signup-password'),
    linkForgotPass: document.getElementById('link-forgot-pass'),

    // Wizard
    wizardCard: document.getElementById('wizard-card'),
    stepIndicators: [
      document.getElementById('step-indicator-1'),
      document.getElementById('step-indicator-2'),
      document.getElementById('step-indicator-3')
    ],
    stepPanes: [
      document.getElementById('step-pane-1'),
      document.getElementById('step-pane-2'),
      document.getElementById('step-pane-3')
    ],
    wizardPrevBtn: document.getElementById('wizard-prev-btn'),
    wizardNextBtn: document.getElementById('wizard-next-btn'),

    // Step 1
    roleSelectorGrid: document.getElementById('role-selector-grid'),
    customRoleInput: document.getElementById('custom-role-input'),
    btnUseCustomRole: document.getElementById('btn-use-custom-role'),

    // Step 2
    skillsMatrixContainer: document.getElementById('skills-matrix-container'),
    btnResetSkills: document.getElementById('btn-reset-skills'),
    btnMarkBeginner: document.getElementById('btn-mark-beginner'),

    // Step 3
    weeklyHoursSlider: document.getElementById('weekly-hours-slider'),
    weeklyHoursDisplay: document.getElementById('weekly-hours-display'),
    timelineMonthsSlider: document.getElementById('timeline-months-slider'),
    timelineMonthsDisplay: document.getElementById('timeline-months-display'),
    learningStyleGroup: document.getElementById('learning-style-group'),
    budgetGroup: document.getElementById('budget-group'),

    // Results Hub
    roadmapResults: document.getElementById('roadmap-results'),
    bannerRoleIcon: document.getElementById('banner-role-icon'),
    bannerRoleTitle: document.getElementById('banner-role-title'),
    bannerMarketDemand: document.getElementById('banner-market-demand'),
    bannerRoleTagline: document.getElementById('banner-role-tagline'),
    kpiReadiness: document.getElementById('kpi-readiness'),
    kpiReadinessSub: document.getElementById('kpi-readiness-sub'),
    kpiDuration: document.getElementById('kpi-duration'),
    kpiHoursSub: document.getElementById('kpi-hours-sub'),
    kpiCompletionDate: document.getElementById('kpi-completion-date'),
    kpiPaceSub: document.getElementById('kpi-pace-sub'),
    kpiSalary: document.getElementById('kpi-salary'),
    feasibilityBanner: document.getElementById('feasibility-banner'),
    feasibilityStatusTitle: document.getElementById('feasibility-status-title'),
    feasibilityStatusDesc: document.getElementById('feasibility-status-desc'),

    // Progress
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressPercentageDisplay: document.getElementById('progress-percentage-display'),
    progressCompletedTasks: document.getElementById('progress-completed-tasks'),
    streakCounterBadge: document.getElementById('streak-counter-badge'),

    // Views
    viewTabs: document.querySelectorAll('.view-tab-btn'),
    viewTimeline: document.getElementById('view-timeline'),
    viewKanban: document.getElementById('view-kanban'),
    viewCalendar: document.getElementById('view-calendar'),
    viewGapMatrix: document.getElementById('view-gap-matrix'),
    timelinePipelineList: document.getElementById('timeline-pipeline-list'),
    btnToggleAllPhases: document.getElementById('btn-toggle-all-phases'),

    // Kanban
    kanbanTodoCount: document.getElementById('kanban-todo-count'),
    kanbanTodoList: document.getElementById('kanban-todo-list'),
    kanbanDoingCount: document.getElementById('kanban-doing-count'),
    kanbanDoingList: document.getElementById('kanban-doing-list'),
    kanbanDoneCount: document.getElementById('kanban-done-count'),
    kanbanDoneList: document.getElementById('kanban-done-list'),

    // Calendar
    calendarWeeklyTarget: document.getElementById('calendar-weekly-target'),
    calendarWeekGrid: document.getElementById('calendar-week-grid'),

    // Gap Matrix
    gapMatrixGrid: document.getElementById('gap-matrix-grid'),

    // Results Actions
    btnSavePlan: document.getElementById('btn-save-plan'),
    btnPrintPlan: document.getElementById('btn-print-plan'),
    btnOpenExport: document.getElementById('btn-open-export'),

    // Assistant / AI Tweak
    promptPills: document.querySelectorAll('.prompt-pill'),
    aiTweakInput: document.getElementById('ai-tweak-input'),
    btnApplyAiTweak: document.getElementById('btn-apply-ai-tweak'),

    // Modals
    exportModal: document.getElementById('export-modal'),
    btnCloseExport: document.getElementById('btn-close-export'),
    btnDoneExport: document.getElementById('btn-done-export'),
    exportCodePreview: document.getElementById('export-code-preview'),
    btnExportMarkdown: document.getElementById('btn-export-markdown'),
    btnExportJson: document.getElementById('btn-export-json'),
    btnCopyClipboard: document.getElementById('btn-copy-clipboard'),

    savedModal: document.getElementById('saved-modal'),
    btnCloseSaved: document.getElementById('btn-close-saved'),
    btnDoneSaved: document.getElementById('btn-done-saved'),
    savedRoadmapsList: document.getElementById('saved-roadmaps-list'),

    // Toast & Canvas
    toastContainer: document.getElementById('toast-container'),
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  /* ==========================================================================
     Theme Management (Default: Luxury White / Light Canvas)
     ========================================================================== */
  function initTheme() {
    try {
      const storedTheme = localStorage.getItem('skillforge_theme');
      state.theme = storedTheme || 'light';
    } catch (e) {
      state.theme = 'light';
    }

    applyTheme(state.theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (elements.themeIcon) {
      elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('skillforge_theme', state.theme);
    } catch (e) {}

    applyTheme(state.theme);
    showToast(`Switched to ${state.theme === 'light' ? 'Pristine White Light' : 'Deep Obsidian Dark'} theme.`, 'info');
  }

  /* ==========================================================================
     Authentication System (Login, Sign Up, Fast Demo, Profile Menu)
     ========================================================================== */
  function initAuth() {
    try {
      const storedUser = localStorage.getItem('skillforge_current_user');
      if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
      }
    } catch (e) {
      state.currentUser = null;
    }

    updateAuthUI();
  }

  function updateAuthUI() {
    if (state.currentUser) {
      // User is logged in
      if (elements.navLoginBtn) elements.navLoginBtn.style.display = 'none';
      if (elements.navUserWrap) elements.navUserWrap.style.display = 'block';

      if (elements.navUserAvatar) elements.navUserAvatar.textContent = state.currentUser.avatar || '👨‍💻';
      if (elements.navUserName) elements.navUserName.textContent = state.currentUser.name;

      if (elements.dropdownUserAvatar) elements.dropdownUserAvatar.textContent = state.currentUser.avatar || '👨‍💻';
      if (elements.dropdownUserFullName) elements.dropdownUserFullName.textContent = state.currentUser.name;
      if (elements.dropdownUserRole) elements.dropdownUserRole.textContent = state.currentUser.trackName || 'Active Learner';
      if (elements.dropdownUserEmail) elements.dropdownUserEmail.textContent = state.currentUser.email;

      // Welcome ribbon
      if (elements.userWelcomeRibbon) {
        elements.userWelcomeRibbon.style.display = 'flex';
        if (elements.ribbonUserName) elements.ribbonUserName.textContent = state.currentUser.name.split(' ')[0];
        if (elements.ribbonUserTrack) elements.ribbonUserTrack.textContent = state.currentUser.trackName || 'Engineering Track';
      }
    } else {
      // User is logged out
      if (elements.navLoginBtn) elements.navLoginBtn.style.display = 'inline-flex';
      if (elements.navUserWrap) elements.navUserWrap.style.display = 'none';
      if (elements.userDropdownMenu) elements.userDropdownMenu.classList.remove('open');
      if (elements.userWelcomeRibbon) elements.userWelcomeRibbon.style.display = 'none';
    }
  }

  function openAuthModal(mode = 'signin') {
    if (!elements.authModal) return;

    if (mode === 'signup') {
      elements.tabSignUp.classList.add('active');
      elements.tabSignIn.classList.remove('active');
      elements.formSignUp.style.display = 'flex';
      elements.formSignIn.style.display = 'none';
      elements.authModalTitle.textContent = 'Create Your Free Account';
    } else {
      elements.tabSignIn.classList.add('active');
      elements.tabSignUp.classList.remove('active');
      elements.formSignIn.style.display = 'flex';
      elements.formSignUp.style.display = 'none';
      elements.authModalTitle.textContent = 'Sign In to SkillForge';
    }

    elements.authModal.classList.add('open');
  }

  function closeAuthModal() {
    if (elements.authModal) {
      elements.authModal.classList.remove('open');
    }
  }

  function loginUser(userData) {
    state.currentUser = userData;
    try {
      localStorage.setItem('skillforge_current_user', JSON.stringify(userData));
    } catch (e) {}

    updateAuthUI();
    closeAuthModal();
    launchConfetti();
    showToast(`Welcome, ${userData.name}! Successfully signed in.`, 'success');

    // Auto-select corresponding role if track provided
    if (userData.role && ROLE_DATABASE[userData.role]) {
      selectRole(userData.role);
    }
  }

  function logoutUser() {
    state.currentUser = null;
    try {
      localStorage.removeItem('skillforge_current_user');
    } catch (e) {}

    updateAuthUI();
    showToast('Signed out of session.', 'info');
  }

  /* ==========================================================================
     Initialization & Local Storage
     ========================================================================== */
  function init() {
    initTheme();
    loadSavedFromStorage();
    initAuth();
    renderRoleSelector();
    renderSkillsMatrix();
    setupEventListeners();
    updateSavedCountUI();
  }

  function loadSavedFromStorage() {
    try {
      const stored = localStorage.getItem('skillforge_saved_roadmaps');
      if (stored) {
        state.savedRoadmaps = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
      state.savedRoadmaps = [];
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem('skillforge_saved_roadmaps', JSON.stringify(state.savedRoadmaps));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  function updateSavedCountUI() {
    if (elements.savedCount) {
      elements.savedCount.textContent = state.savedRoadmaps.length;
    }
  }

  /* ==========================================================================
     Wizard Rendering & Interaction
     ========================================================================== */
  function renderRoleSelector() {
    if (!elements.roleSelectorGrid) return;
    elements.roleSelectorGrid.innerHTML = '';

    Object.values(ROLE_DATABASE).forEach(role => {
      const isSelected = state.selectedRoleId === role.id;
      const card = document.createElement('div');
      card.className = `role-card ${isSelected ? 'selected' : ''}`;
      card.dataset.roleId = role.id;

      card.innerHTML = `
        <div class="role-card-header">
          <div class="role-icon-box">${role.icon}</div>
          <span class="role-tag">${role.category}</span>
        </div>
        <h3>${role.title}</h3>
        <p>${role.tagline}</p>
        <div class="role-meta">
          <span style="color: var(--text-dim); font-size: 0.72rem;">Demand: ${role.marketDemand.split(' ')[0]}</span>
          <span class="salary-tag">${role.avgSalary.split(' /')[0]}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectRole(role.id);
      });

      elements.roleSelectorGrid.appendChild(card);
    });
  }

  function selectRole(roleId) {
    state.selectedRoleId = roleId;
    state.customRoleName = '';
    if (elements.customRoleInput) elements.customRoleInput.value = '';

    document.querySelectorAll('.role-card').forEach(c => {
      c.classList.toggle('selected', c.dataset.roleId === roleId);
    });

    renderSkillsMatrix();
  }

  function renderSkillsMatrix() {
    if (!elements.skillsMatrixContainer) return;
    elements.skillsMatrixContainer.innerHTML = '';

    const role = ROLE_DATABASE[state.selectedRoleId];
    const roleId = role ? role.id : 'custom';

    let relevantSkills = SKILL_DATABASE.filter(s => 
      s.relevance.includes(roleId) || s.category === 'Dev Tools' || s.category === 'Programming'
    );

    if (roleId === 'custom') {
      relevantSkills = SKILL_DATABASE;
    }

    relevantSkills.forEach(skill => {
      const currentLevel = state.skillProficiencies[skill.id] || 'none';
      const row = document.createElement('div');
      row.className = 'skill-row';

      row.innerHTML = `
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-category">${skill.category}</span>
        </div>
        <div class="skill-rating-buttons">
          <button type="button" class="rating-btn ${currentLevel === 'none' ? 'active' : ''}" data-skill="${skill.id}" data-level="none">
            None
          </button>
          <button type="button" class="rating-btn ${currentLevel === 'beginner' ? 'active' : ''}" data-skill="${skill.id}" data-level="beginner">
            Novice
          </button>
          <button type="button" class="rating-btn ${currentLevel === 'proficient' ? 'active' : ''}" data-skill="${skill.id}" data-level="proficient">
            Proficient
          </button>
        </div>
      `;

      row.querySelectorAll('.rating-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetSkill = btn.dataset.skill;
          const targetLevel = btn.dataset.level;
          setSkillLevel(targetSkill, targetLevel, row);
        });
      });

      elements.skillsMatrixContainer.appendChild(row);
    });
  }

  function setSkillLevel(skillId, level, rowElement) {
    state.skillProficiencies[skillId] = level;
    if (rowElement) {
      rowElement.querySelectorAll('.rating-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.level === level);
      });
    }
  }

  function goToStep(step) {
    if (step < 1 || step > 3) return;
    state.currentStep = step;

    elements.stepIndicators.forEach((ind, i) => {
      const stepNum = i + 1;
      ind.classList.remove('active', 'completed');
      if (stepNum === step) {
        ind.classList.add('active');
      } else if (stepNum < step) {
        ind.classList.add('completed');
      }
    });

    elements.stepPanes.forEach((pane, i) => {
      pane.classList.toggle('active', i + 1 === step);
    });

    elements.wizardPrevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
    if (step === 3) {
      elements.wizardNextBtn.innerHTML = '⚡ Generate Roadmap →';
    } else {
      elements.wizardNextBtn.innerHTML = 'Next Step →';
    }

    elements.wizardCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ==========================================================================
     Roadmap Generation Execution
     ========================================================================== */
  function executeGenerateRoadmap() {
    showToast('Synthesizing your personalized roadmap...', 'info');

    elements.wizardNextBtn.innerHTML = '⌛ Generating Curriculum...';
    elements.wizardNextBtn.disabled = true;

    setTimeout(() => {
      const roadmap = generatePersonalizedRoadmap({
        roleId: state.selectedRoleId,
        customRoleName: state.customRoleName,
        skillProficiencies: state.skillProficiencies,
        weeklyHours: state.weeklyHours,
        targetMonths: state.timelineMonths,
        learningStyle: state.learningStyle,
        budget: state.budget
      });

      state.currentRoadmap = roadmap;

      renderRoadmapHub(roadmap);

      elements.roadmapResults.style.display = 'block';
      elements.navExportBtn.style.display = 'inline-flex';

      elements.wizardNextBtn.innerHTML = '⚡ Regenerate Roadmap →';
      elements.wizardNextBtn.disabled = false;

      elements.roadmapResults.scrollIntoView({ behavior: 'smooth', block: 'start' });

      launchConfetti();
      showToast(`Success! Generated a ${roadmap.totalWeeksEstimated}-week roadmap for ${roadmap.roleTitle}.`, 'success');
    }, 400);
  }

  /* ==========================================================================
     Roadmap Hub & Views Rendering
     ========================================================================== */
  function renderRoadmapHub(roadmap) {
    elements.bannerRoleIcon.textContent = roadmap.roleIcon;
    elements.bannerRoleTitle.textContent = roadmap.roleTitle;
    elements.bannerMarketDemand.textContent = roadmap.marketDemand;
    elements.bannerRoleTagline.textContent = roadmap.roleTagline;

    elements.kpiReadiness.textContent = `${roadmap.readinessIndex}%`;
    elements.kpiReadinessSub.textContent = `${roadmap.proficientCount} proficient, ${roadmap.beginnerCount} novice`;

    elements.kpiDuration.textContent = `${roadmap.totalWeeksEstimated} Weeks`;
    elements.kpiHoursSub.textContent = `~${roadmap.totalCurriculumHours} Estimated Hours`;

    elements.kpiCompletionDate.textContent = roadmap.targetCompletionDate;
    elements.kpiPaceSub.textContent = `At ${roadmap.weeklyCommitmentHours} hrs / week`;

    elements.kpiSalary.textContent = roadmap.avgSalary.split(' /')[0];

    elements.feasibilityStatusTitle.textContent = roadmap.feasibilityStatus;
    elements.feasibilityStatusDesc.textContent = roadmap.feasibilityMessage;

    elements.feasibilityBanner.className = 'feasibility-callout ' + 
      (roadmap.feasibilityStatus.includes('Optimal') ? 'optimal' :
       roadmap.feasibilityStatus.includes('Comfortable') ? 'comfortable' : 'sprint');

    updateOverallProgress();

    renderTimelineView(roadmap);
    renderKanbanView(roadmap);
    renderCalendarView(roadmap);
    renderGapMatrixView(roadmap);
  }

  /* ==========================================================================
     1. Timeline View Rendering
     ========================================================================== */
  function renderTimelineView(roadmap) {
    if (!elements.timelinePipelineList) return;
    elements.timelinePipelineList.innerHTML = '';

    roadmap.phases.forEach((phase, phaseIdx) => {
      const node = document.createElement('div');
      node.className = `phase-node ${phase.isCompleted ? 'completed-phase' : ''}`;
      node.id = `phase-node-${phase.id}`;

      const completedTasksCount = phase.checklist.filter(t => t.completed).length;
      const totalTasksCount = phase.checklist.length;
      const phaseComplete = totalTasksCount > 0 && completedTasksCount === totalTasksCount;

      node.innerHTML = `
        <div class="phase-indicator">${phaseComplete ? '✓' : phaseIdx + 1}</div>
        <div class="phase-header">
          <div class="phase-title-group">
            <h3>${phase.title}</h3>
            <p class="phase-subtitle">${phase.subtitle}</p>
          </div>
          <div class="phase-badges">
            <span class="badge badge-time">${phase.calculatedWeeks}</span>
            <span class="badge badge-hours">~${phase.calculatedHours} Hours</span>
            <span class="badge badge-difficulty">${phase.difficulty}</span>
            ${phase.isFastTracked ? '<span class="badge" style="background: rgba(5,150,105,0.08); color: #059669; border: 1px solid rgba(5,150,105,0.25);">⚡ Fast-Tracked</span>' : ''}
          </div>
        </div>

        <div class="phase-body" id="phase-body-${phase.id}">
          <p class="phase-desc">${phase.description}</p>

          <div>
            <div class="section-label">🎯 Competencies Targeted</div>
            <div class="phase-skills-tags">
              ${phase.skillsTargeted.map(s => `<span class="phase-skill-pill">${s}</span>`).join('')}
            </div>
          </div>

          <div class="checklist-container">
            <div class="section-label">
              <span>✅ Phase Action Checklist</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--brand-primary);" id="checklist-counter-${phase.id}">
                ${completedTasksCount} / ${totalTasksCount} Cleared
              </span>
            </div>
            <div class="checklist-items">
              ${phase.checklist.map(task => `
                <div class="task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}" data-phase-id="${phase.id}">
                  <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-task-id="${task.id}">
                  <span class="task-text">${task.type === 'milestone' ? '🏆 ' : ''}${task.text}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="capstone-card">
            <div class="capstone-header">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--brand-primary); font-weight: 700;">
                ⭐ Milestone Capstone Project
              </span>
              <span class="badge badge-difficulty">${phase.milestone.type}</span>
            </div>
            <h4 class="capstone-title">${phase.milestone.title}</h4>
            <p class="capstone-deliverable">${phase.milestone.deliverable}</p>
            <ul class="capstone-specs-list">
              ${phase.milestone.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
          </div>

          <div>
            <div class="section-label">📚 Curated Top-Tier Learning Resources</div>
            <div class="resources-grid">
              ${phase.resources.map(res => `
                <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
                  <div>
                    <div class="resource-top">
                      <span class="resource-badge">${res.badge}</span>
                      <span style="font-size: 0.72rem; color: var(--text-dim);">${res.type}</span>
                    </div>
                    <div class="resource-title">${res.title}</div>
                    <div class="resource-highlight">${res.highlight}</div>
                  </div>
                  <div class="resource-meta">
                    <span>${res.provider}</span>
                    <span style="font-family: var(--font-mono);">⏱️ ${res.duration}</span>
                  </div>
                </a>
              `).join('')}
            </div>
          </div>

          ${phase.quiz ? `
            <div class="quiz-card" data-phase-id="${phase.id}">
              <div class="section-label">🧠 Knowledge Check Self-Assessment</div>
              <div class="quiz-question">${phase.quiz.question}</div>
              <div class="quiz-options">
                ${phase.quiz.options.map((opt, optIdx) => `
                  <button type="button" class="quiz-opt-btn" data-phase-id="${phase.id}" data-opt-idx="${optIdx}">
                    ${String.fromCharCode(65 + optIdx)}. ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="quiz-explanation" id="quiz-exp-${phase.id}">
                ${phase.quiz.explanation}
              </div>
            </div>
          ` : ''}
        </div>
      `;

      node.querySelectorAll('.task-item').forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.tagName !== 'INPUT') {
            const cb = item.querySelector('.task-checkbox');
            cb.checked = !cb.checked;
          }
          const taskId = item.dataset.taskId;
          const phaseId = item.dataset.phaseId;
          const isChecked = item.querySelector('.task-checkbox').checked;
          toggleTaskCompletion(phaseId, taskId, isChecked);
        });
      });

      if (phase.quiz) {
        node.querySelectorAll('.quiz-opt-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const optIdx = parseInt(btn.dataset.optIdx, 10);
            handleQuizAnswer(phase.id, optIdx, phase.quiz.correctIndex, node);
          });
        });
      }

      elements.timelinePipelineList.appendChild(node);
    });
  }

  function toggleTaskCompletion(phaseId, taskId, isCompleted) {
    if (!state.currentRoadmap) return;
    const phase = state.currentRoadmap.phases.find(p => p.id === phaseId);
    if (!phase) return;

    const task = phase.checklist.find(t => t.id === taskId);
    if (!task) return;

    task.completed = isCompleted;

    const taskEl = document.querySelector(`.task-item[data-task-id="${taskId}"]`);
    if (taskEl) {
      taskEl.classList.toggle('completed', isCompleted);
      const cb = taskEl.querySelector('.task-checkbox');
      if (cb) cb.checked = isCompleted;
    }

    const counterEl = document.getElementById(`checklist-counter-${phaseId}`);
    const completedCount = phase.checklist.filter(t => t.completed).length;
    if (counterEl) {
      counterEl.textContent = `${completedCount} / ${phase.checklist.length} Cleared`;
    }

    const phaseComplete = completedCount === phase.checklist.length;
    phase.isCompleted = phaseComplete;
    const phaseNode = document.getElementById(`phase-node-${phaseId}`);
    if (phaseNode) {
      phaseNode.classList.toggle('completed-phase', phaseComplete);
      const ind = phaseNode.querySelector('.phase-indicator');
      if (ind) {
        ind.textContent = phaseComplete ? '✓' : phaseNode.id.replace('phase-node-phase-', '');
      }
    }

    if (isCompleted) {
      launchConfetti();
      showToast(`Milestone marked complete! Great progress!`, 'success');
    }

    updateOverallProgress();
    renderKanbanView(state.currentRoadmap);
  }

  function handleQuizAnswer(phaseId, selectedIdx, correctIdx, phaseNode) {
    const buttons = phaseNode.querySelectorAll(`.quiz-opt-btn[data-phase-id="${phaseId}"]`);
    const exp = phaseNode.querySelector(`#quiz-exp-${phaseId}`);

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    if (exp) {
      exp.style.display = 'block';
    }

    if (selectedIdx === correctIdx) {
      launchConfetti();
      showToast('Correct! Concept validated.', 'success');
    } else {
      showToast('Review explanation to master this concept.', 'info');
    }
  }

  function updateOverallProgress() {
    if (!state.currentRoadmap) return;
    let totalTasks = 0;
    let completedTasks = 0;

    state.currentRoadmap.phases.forEach(p => {
      p.checklist.forEach(t => {
        totalTasks++;
        if (t.completed) completedTasks++;
      });
    });

    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    elements.progressBarFill.style.width = `${percentage}%`;
    elements.progressPercentageDisplay.textContent = `${percentage}% Completed`;
    elements.progressCompletedTasks.textContent = `${completedTasks} of ${totalTasks} Milestones & Concepts Checked`;

    if (percentage === 100) {
      launchConfetti();
      showToast('🎉 Extraordinary achievement! 100% of curriculum mastered!', 'success');
    }
  }

  /* ==========================================================================
     2. Kanban Board View Rendering
     ========================================================================== */
  function renderKanbanView(roadmap) {
    if (!elements.kanbanTodoList) return;
    elements.kanbanTodoList.innerHTML = '';
    elements.kanbanDoingList.innerHTML = '';
    elements.kanbanDoneList.innerHTML = '';

    let todoCount = 0;
    let doingCount = 0;
    let doneCount = 0;

    roadmap.phases.forEach((phase, phaseIdx) => {
      phase.checklist.forEach(task => {
        const card = document.createElement('div');
        card.className = 'kanban-card';
        card.innerHTML = `
          <div class="kanban-card-title">${task.type === 'milestone' ? '⭐ ' : ''}${task.text}</div>
          <div class="kanban-card-meta">
            <span>${phase.title.split(':')[0]}</span>
            <span>${phase.calculatedWeeks}</span>
          </div>
        `;

        if (task.completed) {
          doneCount++;
          elements.kanbanDoneList.appendChild(card);
        } else if (phaseIdx === 0 || (roadmap.phases[phaseIdx - 1] && roadmap.phases[phaseIdx - 1].isCompleted)) {
          doingCount++;
          elements.kanbanDoingList.appendChild(card);
        } else {
          todoCount++;
          elements.kanbanTodoList.appendChild(card);
        }
      });
    });

    elements.kanbanTodoCount.textContent = todoCount;
    elements.kanbanDoingCount.textContent = doingCount;
    elements.kanbanDoneCount.textContent = doneCount;
  }

  /* ==========================================================================
     3. Weekly Study Routine Calendar View
     ========================================================================== */
  function renderCalendarView(roadmap) {
    if (!elements.calendarWeekGrid) return;
    elements.calendarWeekGrid.innerHTML = '';

    const weeklyHours = roadmap.weeklyCommitmentHours;
    elements.calendarWeeklyTarget.textContent = `${weeklyHours} Hours / Week`;

    const days = [
      { name: 'Monday', pct: 0.15, desc: 'Core Concept Reading & Video Lectures' },
      { name: 'Tuesday', pct: 0.15, desc: 'Interactive Exercises & Code Sandboxes' },
      { name: 'Wednesday', pct: 0.15, desc: 'Concept Synthesis & Documentation' },
      { name: 'Thursday', pct: 0.15, desc: 'Hands-on Lab Experiments' },
      { name: 'Friday', pct: 0.15, desc: 'Weekly Quiz & Code Review' },
      { name: 'Saturday', pct: 0.20, desc: 'Capstone Project Deep Build Session' },
      { name: 'Sunday', pct: 0.05, desc: 'Light Reflection & Week Planning' }
    ];

    days.forEach(day => {
      const dayHours = (weeklyHours * day.pct).toFixed(1);
      const dayCol = document.createElement('div');
      dayCol.className = 'calendar-day-col';

      dayCol.innerHTML = `
        <div class="day-header">${day.name}</div>
        <div style="font-size: 1.15rem; font-weight: 800; font-family: var(--font-mono); color: var(--brand-primary); margin-bottom: 0.25rem;">
          ${dayHours} hrs
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.35;">
          ${day.desc}
        </div>
        <div class="day-slot">
          <span>🎯 Focus Session</span>
        </div>
      `;

      elements.calendarWeekGrid.appendChild(dayCol);
    });
  }

  /* ==========================================================================
     4. Skill Gap Matrix View
     ========================================================================== */
  function renderGapMatrixView(roadmap) {
    if (!elements.gapMatrixGrid) return;
    elements.gapMatrixGrid.innerHTML = '';

    const roleSkills = SKILL_DATABASE.filter(s => 
      s.relevance.includes(roadmap.roleId) || s.category === 'Programming' || s.category === 'Dev Tools'
    );

    roleSkills.forEach(skill => {
      const userLevel = state.skillProficiencies[skill.id] || 'none';
      let statusClass = 'missing';
      let statusText = 'Need To Master';

      if (userLevel === 'proficient') {
        statusClass = 'ready';
        statusText = 'Ready / Proficient';
      } else if (userLevel === 'beginner') {
        statusClass = 'partial';
        statusText = 'Reinforce & Apply';
      }

      const card = document.createElement('div');
      card.className = 'gap-item';
      card.innerHTML = `
        <div class="gap-item-top">
          <span class="gap-skill-name">${skill.name}</span>
          <span class="gap-status-pill ${statusClass}">${statusText}</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 0.75rem;">
          Category: ${skill.category}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.45;">
          ${statusClass === 'ready' 
            ? '✓ Verified foundation; fast-tracked in roadmap to focus on advanced production systems.' 
            : statusClass === 'partial' 
            ? '🟡 Basic familiarity detected; targeted for applied capstone problem sets.' 
            : '❌ Core skill gap; allocated dedicated foundation lessons in early phases.'}
        </div>
      `;

      elements.gapMatrixGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     AI Tuning & Quick Presets
     ========================================================================== */
  function handlePresetTweak(tweakType) {
    if (!state.currentRoadmap) return;

    if (tweakType === 'fast-track') {
      state.timelineMonths = 1;
      state.weeklyHours = 35;
      elements.weeklyHoursSlider.value = 35;
      elements.timelineMonthsSlider.value = 1;
      showToast('Accelerated into 30-Day Emergency Interview Sprint (35 hrs/wk)', 'info');
    } else if (tweakType === 'weekend') {
      state.timelineMonths = 6;
      state.weeklyHours = 6;
      elements.weeklyHoursSlider.value = 6;
      elements.timelineMonthsSlider.value = 6;
      showToast('Paced for Weekend Warrior schedule (6 hrs/wk over 6 months)', 'info');
    } else if (tweakType === 'project-heavy') {
      state.learningStyle = 'projects';
      updateChipSelection(elements.learningStyleGroup, 'projects');
      showToast('Filtered syllabus for 100% Project-First Capstones', 'info');
    } else if (tweakType === 'all-free') {
      state.budget = 'free';
      updateChipSelection(elements.budgetGroup, 'free');
      showToast('Filtered exclusively for 100% Free / Open Source Resources', 'info');
    }

    updateSliderDisplays();
    executeGenerateRoadmap();
  }

  function handleCustomAiTweak() {
    const input = elements.aiTweakInput.value.trim().toLowerCase();
    if (!input) return;

    if (input.includes('fast') || input.includes('urgent') || input.includes('month')) {
      state.timelineMonths = 2;
      state.weeklyHours = 25;
    } else if (input.includes('slow') || input.includes('busy') || input.includes('part-time')) {
      state.timelineMonths = 8;
      state.weeklyHours = 8;
    } else if (input.includes('free') || input.includes('budget')) {
      state.budget = 'free';
    } else if (input.includes('project') || input.includes('build')) {
      state.learningStyle = 'projects';
    }

    updateSliderDisplays();
    elements.aiTweakInput.value = '';
    showToast(`AI prompt synthesized: Adjusted curriculum parameters for "${input}"`, 'success');
    executeGenerateRoadmap();
  }

  /* ==========================================================================
     Exporting & Markdown Generation
     ========================================================================== */
  function generateMarkdownExport(roadmap) {
    if (!roadmap) return '';

    let md = `# 🚀 ${roadmap.roleTitle} - Personalized Learning Roadmap\n\n`;
    md += `> **Tagline:** ${roadmap.roleTagline}\n`;
    md += `> **Market Demand:** ${roadmap.marketDemand} | **Compensation Band:** ${roadmap.avgSalary}\n`;
    md += `> **Target Completion:** ${roadmap.targetCompletionDate} (${roadmap.totalWeeksEstimated} Weeks at ${roadmap.weeklyCommitmentHours} hrs/week)\n\n`;

    md += `## 📊 Executive Diagnostic Metrics\n`;
    md += `- **Skill Readiness Index:** ${roadmap.readinessIndex}%\n`;
    md += `- **Total Curriculum Hours:** ~${roadmap.totalCurriculumHours} Hours\n`;
    md += `- **Pacing Feasibility:** ${roadmap.feasibilityStatus} (${roadmap.feasibilityMessage})\n\n`;

    md += `---\n\n`;
    md += `## 📅 Structured Phase-by-Phase Syllabus\n\n`;

    roadmap.phases.forEach((phase) => {
      md += `### ${phase.title}\n`;
      md += `*${phase.subtitle}*  \n`;
      md += `**Duration:** ${phase.calculatedWeeks} (~${phase.calculatedHours} Hours) | **Difficulty:** ${phase.difficulty}\n\n`;
      md += `**Description:** ${phase.description}\n\n`;

      md += `#### Key Objectives & Checklist:\n`;
      phase.checklist.forEach(t => {
        md += `- [${t.completed ? 'x' : ' '}] ${t.text}\n`;
      });
      md += `\n`;

      md += `#### 🏆 Capstone Project: ${phase.milestone.title}\n`;
      md += `*Deliverable:* ${phase.milestone.deliverable}  \n`;
      md += `*Specifications:*\n`;
      phase.milestone.specs.forEach(s => {
        md += `  - ${s}\n`;
      });
      md += `\n`;

      md += `#### 📚 Curated Learning Resources:\n`;
      phase.resources.forEach(r => {
        md += `- [${r.title}](${r.url}) (${r.provider} - ${r.duration}) - *${r.highlight}*\n`;
      });
      md += `\n---\n\n`;
    });

    md += `*Generated with SkillForge AI on ${new Date().toLocaleDateString()}*\n`;
    return md;
  }

  function openExportModal() {
    if (!state.currentRoadmap) return;
    const md = generateMarkdownExport(state.currentRoadmap);
    elements.exportCodePreview.textContent = md;
    elements.exportModal.classList.add('open');
  }

  function downloadJsonFile() {
    if (!state.currentRoadmap) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.currentRoadmap, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `${state.currentRoadmap.roleId}-roadmap.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast('Downloaded JSON roadmap file.', 'success');
  }

  function copyTextSummary() {
    if (!state.currentRoadmap) return;
    const md = generateMarkdownExport(state.currentRoadmap);
    navigator.clipboard.writeText(md).then(() => {
      showToast('Copied full roadmap to clipboard! Ready to paste into Notion or Obsidian.', 'success');
    }).catch(() => {
      showToast('Copy failed, please select and copy manually from preview.', 'info');
    });
  }

  /* ==========================================================================
     Saved Plans Library & Modal
     ========================================================================== */
  function saveCurrentPlan() {
    if (!state.currentRoadmap) return;
    const newEntry = {
      id: 'plan-' + Date.now(),
      savedAt: new Date().toLocaleDateString(),
      user: state.currentUser ? state.currentUser.name : 'Guest Learner',
      roadmap: JSON.parse(JSON.stringify(state.currentRoadmap))
    };

    state.savedRoadmaps.unshift(newEntry);
    saveToStorage();
    updateSavedCountUI();
    showToast(`Saved "${state.currentRoadmap.roleTitle}" to your browser storage.`, 'success');
  }

  function openSavedModal() {
    if (!elements.savedRoadmapsList) return;
    elements.savedRoadmapsList.innerHTML = '';

    if (state.savedRoadmaps.length === 0) {
      elements.savedRoadmapsList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <p style="font-size: 2rem; margin-bottom: 0.5rem;">📂</p>
          <p>No saved roadmaps yet. Generate and click "Save Roadmap" to store your progress.</p>
        </div>
      `;
    } else {
      state.savedRoadmaps.forEach((entry, idx) => {
        const item = document.createElement('div');
        item.className = 'role-card';
        item.style.padding = '1.25rem';
        item.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <span style="font-size: 1.75rem;">${entry.roadmap.roleIcon}</span>
              <div>
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-pure);">${entry.roadmap.roleTitle}</h4>
                <span style="font-size: 0.75rem; color: var(--text-dim);">${entry.savedAt} • ${entry.roadmap.totalWeeksEstimated} Weeks • Saved by ${entry.user || 'Guest'}</span>
              </div>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-primary btn-sm btn-load-plan" data-index="${idx}">Load</button>
              <button class="btn btn-outline btn-sm btn-delete-plan" data-index="${idx}" style="color: var(--brand-rose);">&times;</button>
            </div>
          </div>
        `;

        item.querySelector('.btn-load-plan').addEventListener('click', () => {
          state.currentRoadmap = entry.roadmap;
          renderRoadmapHub(entry.roadmap);
          elements.roadmapResults.style.display = 'block';
          elements.savedModal.classList.remove('open');
          showToast(`Loaded saved profile for ${entry.roadmap.roleTitle}.`, 'success');
          elements.roadmapResults.scrollIntoView({ behavior: 'smooth' });
        });

        item.querySelector('.btn-delete-plan').addEventListener('click', () => {
          state.savedRoadmaps.splice(idx, 1);
          saveToStorage();
          updateSavedCountUI();
          openSavedModal();
          showToast('Roadmap removed from storage.', 'info');
        });

        elements.savedRoadmapsList.appendChild(item);
      });
    }

    elements.savedModal.classList.add('open');
  }

  /* ==========================================================================
     Confetti Animation Engine
     ========================================================================== */
  function launchConfetti() {
    const canvas = elements.confettiCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#4f46e5', '#0284c7', '#059669', '#d97706', '#e11d48', '#818cf8'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() * 200 - 100),
        y: canvas.height * 0.4 + (Math.random() * 100 - 50),
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.7) * 14,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        gravity: 0.35,
        opacity: 1
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.015;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      frame++;
      if (alive && frame < 90) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    requestAnimationFrame(renderConfetti);
  }

  /* ==========================================================================
     Toast Notifications
     ========================================================================== */
  function showToast(message, type = 'info') {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-info'}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✨' : 'ℹ️'}</span>
      <span>${message}</span>
    `;

    elements.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     Helper Utilities & Event Listeners
     ========================================================================== */
  function updateSliderDisplays() {
    if (elements.weeklyHoursDisplay) {
      elements.weeklyHoursDisplay.textContent = `${state.weeklyHours} hrs / week`;
    }
    if (elements.timelineMonthsDisplay) {
      elements.timelineMonthsDisplay.textContent = `${state.timelineMonths} Months`;
    }
  }

  function updateChipSelection(group, value) {
    if (!group) return;
    group.querySelectorAll('.option-chip').forEach(chip => {
      const match = chip.dataset.style === value || chip.dataset.budget === value;
      chip.classList.toggle('selected', match);
    });
  }

  function setupEventListeners() {
    // Theme toggle button
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Nav Auth buttons
    if (elements.navLoginBtn) {
      elements.navLoginBtn.addEventListener('click', () => openAuthModal('signin'));
    }

    if (elements.navUserBtn) {
      elements.navUserBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.userDropdownMenu.classList.toggle('open');
      });
    }

    // Close user dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (elements.userDropdownMenu && elements.navUserWrap && !elements.navUserWrap.contains(e.target)) {
        elements.userDropdownMenu.classList.remove('open');
      }
    });

    // Dropdown items
    if (elements.dropdownSavedBtn) {
      elements.dropdownSavedBtn.addEventListener('click', () => {
        elements.userDropdownMenu.classList.remove('open');
        openSavedModal();
      });
    }

    if (elements.dropdownProfileBtn) {
      elements.dropdownProfileBtn.addEventListener('click', () => {
        elements.userDropdownMenu.classList.remove('open');
        if (state.currentRoadmap) {
          elements.roadmapResults.scrollIntoView({ behavior: 'smooth' });
        } else {
          elements.wizardCard.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    if (elements.dropdownLogoutBtn) {
      elements.dropdownLogoutBtn.addEventListener('click', logoutUser);
    }

    // Welcome Ribbon Resume Button
    if (elements.btnRibbonQuickResume) {
      elements.btnRibbonQuickResume.addEventListener('click', () => {
        if (state.currentRoadmap) {
          elements.roadmapResults.scrollIntoView({ behavior: 'smooth' });
        } else {
          executeGenerateRoadmap();
        }
      });
    }

    // Auth Modal Tabs
    if (elements.tabSignIn) {
      elements.tabSignIn.addEventListener('click', () => openAuthModal('signin'));
    }
    if (elements.tabSignUp) {
      elements.tabSignUp.addEventListener('click', () => openAuthModal('signup'));
    }
    if (elements.btnCloseAuth) {
      elements.btnCloseAuth.addEventListener('click', closeAuthModal);
    }

    // Password visibility toggles
    if (elements.btnToggleSigninPass) {
      elements.btnToggleSigninPass.addEventListener('click', () => {
        const type = elements.signinPassword.type === 'password' ? 'text' : 'password';
        elements.signinPassword.type = type;
      });
    }
    if (elements.btnToggleSignupPass) {
      elements.btnToggleSignupPass.addEventListener('click', () => {
        const type = elements.signupPassword.type === 'password' ? 'text' : 'password';
        elements.signupPassword.type = type;
      });
    }

    // One-Click Demo Fast Logins
    if (elements.btnDemoAlex) {
      elements.btnDemoAlex.addEventListener('click', () => {
        loginUser({
          name: 'Alex Chen',
          email: 'alex.chen@example.com',
          avatar: '👨‍💻',
          role: 'data-analyst',
          trackName: 'Data Analyst Track'
        });
      });
    }

    if (elements.btnDemoSarah) {
      elements.btnDemoSarah.addEventListener('click', () => {
        loginUser({
          name: 'Sarah Connor',
          email: 'sarah.connor@example.com',
          avatar: '👩‍💻',
          role: 'fullstack-developer',
          trackName: 'Full-Stack Web Engineer'
        });
      });
    }

    // Social Auth Buttons
    if (elements.btnSocialGoogle) {
      elements.btnSocialGoogle.addEventListener('click', () => {
        loginUser({
          name: 'Google User',
          email: 'user@gmail.com',
          avatar: '🌐',
          role: 'data-analyst',
          trackName: 'Google Verified Account'
        });
      });
    }

    if (elements.btnSocialGithub) {
      elements.btnSocialGithub.addEventListener('click', () => {
        loginUser({
          name: 'GitHub Engineer',
          email: 'dev@github.com',
          avatar: '🐙',
          role: 'frontend-developer',
          trackName: 'GitHub Developer Track'
        });
      });
    }

    // Form Submissions
    if (elements.formSignIn) {
      elements.formSignIn.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = elements.signinEmail.value.trim();
        const namePart = email.split('@')[0];
        const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

        loginUser({
          name: displayName,
          email: email,
          avatar: '👤',
          role: state.selectedRoleId,
          trackName: ROLE_DATABASE[state.selectedRoleId]?.title || 'Tech Specialist'
        });
      });
    }

    if (elements.formSignUp) {
      elements.formSignUp.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = elements.signupName.value.trim();
        const email = elements.signupEmail.value.trim();
        const selectedTrack = elements.signupRole.value;

        loginUser({
          name: name,
          email: email,
          avatar: '🚀',
          role: selectedTrack,
          trackName: ROLE_DATABASE[selectedTrack]?.title || 'Career Specialist'
        });
      });
    }

    if (elements.linkForgotPass) {
      elements.linkForgotPass.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Password reset link sent to registered email.', 'info');
      });
    }

    // Nav Home / New
    elements.brandHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      elements.wizardCard.scrollIntoView({ behavior: 'smooth' });
    });

    elements.navNewBtn.addEventListener('click', () => {
      goToStep(1);
    });

    elements.navSavedBtn.addEventListener('click', openSavedModal);
    elements.navExportBtn.addEventListener('click', openExportModal);

    // Wizard Next & Prev
    elements.wizardPrevBtn.addEventListener('click', () => {
      goToStep(state.currentStep - 1);
    });

    elements.wizardNextBtn.addEventListener('click', () => {
      if (state.currentStep < 3) {
        goToStep(state.currentStep + 1);
      } else {
        executeGenerateRoadmap();
      }
    });

    // Custom Role Button
    elements.btnUseCustomRole.addEventListener('click', () => {
      const customVal = elements.customRoleInput.value.trim();
      if (!customVal) {
        showToast('Please type a role title first.', 'info');
        return;
      }
      state.customRoleName = customVal;
      state.selectedRoleId = 'custom';
      document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
      renderSkillsMatrix();
      showToast(`Custom Target "${customVal}" registered. Diagnosing skills...`, 'success');
      goToStep(2);
    });

    // Step 2 Quick Action Buttons
    elements.btnResetSkills.addEventListener('click', () => {
      state.skillProficiencies = {};
      renderSkillsMatrix();
      showToast('Reset all skills to No Experience.', 'info');
    });

    elements.btnMarkBeginner.addEventListener('click', () => {
      SKILL_DATABASE.forEach(s => {
        state.skillProficiencies[s.id] = 'beginner';
      });
      renderSkillsMatrix();
      showToast('Marked all skills as Novice / Basic.', 'info');
    });

    // Step 3 Sliders
    elements.weeklyHoursSlider.addEventListener('input', (e) => {
      state.weeklyHours = parseInt(e.target.value, 10);
      elements.weeklyHoursDisplay.textContent = `${state.weeklyHours} hrs / week`;
    });

    elements.timelineMonthsSlider.addEventListener('input', (e) => {
      state.timelineMonths = parseInt(e.target.value, 10);
      elements.timelineMonthsDisplay.textContent = `${state.timelineMonths} Months`;
    });

    // Step 3 Chip Groups
    elements.learningStyleGroup.querySelectorAll('.option-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.learningStyle = chip.dataset.style;
        updateChipSelection(elements.learningStyleGroup, state.learningStyle);
      });
    });

    elements.budgetGroup.querySelectorAll('.option-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.budget = chip.dataset.budget;
        updateChipSelection(elements.budgetGroup, state.budget);
      });
    });

    // Results Actions
    elements.btnSavePlan.addEventListener('click', saveCurrentPlan);
    elements.btnPrintPlan.addEventListener('click', () => window.print());
    elements.btnOpenExport.addEventListener('click', openExportModal);

    // Multi-View Tabs
    elements.viewTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        state.activeView = view;

        elements.viewTabs.forEach(b => b.classList.toggle('active', b.dataset.view === view));

        elements.viewTimeline.classList.toggle('active', view === 'timeline');
        elements.viewKanban.classList.toggle('active', view === 'kanban');
        elements.viewCalendar.classList.toggle('active', view === 'calendar');
        elements.viewGapMatrix.classList.toggle('active', view === 'gap-matrix');
      });
    });

    // Expand/Collapse All Phases
    elements.btnToggleAllPhases.addEventListener('click', () => {
      state.allPhasesExpanded = !state.allPhasesExpanded;
      document.querySelectorAll('.phase-body').forEach(body => {
        body.style.display = state.allPhasesExpanded ? 'flex' : 'none';
      });
      elements.btnToggleAllPhases.textContent = state.allPhasesExpanded ? 'Collapse All Phases' : 'Expand All Phases';
    });

    // AI Presets & Tweaks
    elements.promptPills.forEach(pill => {
      pill.addEventListener('click', () => {
        handlePresetTweak(pill.dataset.tweak);
      });
    });

    elements.btnApplyAiTweak.addEventListener('click', handleCustomAiTweak);
    elements.aiTweakInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCustomAiTweak();
    });

    // Modals
    elements.btnCloseExport.addEventListener('click', () => elements.exportModal.classList.remove('open'));
    elements.btnDoneExport.addEventListener('click', () => elements.exportModal.classList.remove('open'));
    elements.btnExportMarkdown.addEventListener('click', openExportModal);
    elements.btnExportJson.addEventListener('click', downloadJsonFile);
    elements.btnCopyClipboard.addEventListener('click', copyTextSummary);

    elements.btnCloseSaved.addEventListener('click', () => elements.savedModal.classList.remove('open'));
    elements.btnDoneSaved.addEventListener('click', () => elements.savedModal.classList.remove('open'));

    // Window resize for confetti canvas
    window.addEventListener('resize', () => {
      if (elements.confettiCanvas) {
        elements.confettiCanvas.width = window.innerWidth;
        elements.confettiCanvas.height = window.innerHeight;
      }
    });
  }

  // Run on page load
  document.addEventListener('DOMContentLoaded', init);
})();
