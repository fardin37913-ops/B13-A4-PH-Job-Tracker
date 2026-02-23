
const totalH2 = document.getElementById('total-count');
const interviewH2 = document.getElementById('interview-count');
const rejectedH2 = document.getElementById('rejected-count');
const tabCountSpan = document.getElementById('tab-job-count');
const jobList = document.getElementById('job-list');
const emptyState = document.getElementById('empty-state');

let currentView = 'all';

function updateDashboard() {
    const allCards = document.querySelectorAll('.job-card');
    const intCards = document.querySelectorAll('.job-card[data-status="interview"]');
    const rejCards = document.querySelectorAll('.job-card[data-status="rejected"]');

    totalH2.innerText = allCards.length;
    interviewH2.innerText = intCards.length;
    rejectedH2.innerText = rejCards.length;
}

jobList.addEventListener('click', function(e) {
    const card = e.target.closest('.job-card');
    if (!card) return;

    if (e.target.closest('.del-btn')) {
        card.remove();
        updateDashboard();
        refreshFilter();
    }

    if (e.target.classList.contains('int-btn')) {
        card.setAttribute('data-status', 'interview');
        card.querySelector('.status-badge').innerText = 'INTERVIEW';
        updateDashboard();
        refreshFilter();
    }

    if (e.target.classList.contains('rej-btn')) {
        card.setAttribute('data-status', 'rejected');
        card.querySelector('.status-badge').innerText = 'REJECTED';
        updateDashboard();
        refreshFilter();
    }
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.tab-btn.active').classList.remove('active');
        this.classList.add('active');
        
        currentView = this.innerText.toLowerCase();
        refreshFilter();
    });
});

function refreshFilter() {
    const cards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.getAttribute('data-status');
        
        if (currentView === 'all' || status === currentView) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    tabCountSpan.innerText = `${visibleCount} jobs`;
    emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
}

updateDashboard();