const totalH2 = document.getElementById('total-count');
const interviewH2 = document.getElementById('interview-count');
const rejectedH2 = document.getElementById('rejected-count');
const tabJobCountText = document.getElementById('tab-job-count');
const jobList = document.getElementById('job-list');
const emptyState = document.getElementById('empty-state');

let currentView = 'all';

function updateStats() {
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

    const badge = card.querySelector('.status-badge');

    
    if (e.target.classList.contains('int-btn')) {
        card.setAttribute('data-status', 'interview');
        badge.innerText = 'INTERVIEW';
        
        
        badge.classList.remove('rejected-color'); 
        badge.classList.add('interview-color');  
        
        updateStats();
        filterTab(currentView);
    }


    if (e.target.classList.contains('rej-btn')) {
        card.setAttribute('data-status', 'rejected');
        badge.innerText = 'REJECTED';
        
        badge.classList.remove('interview-color'); 
        badge.classList.add('rejected-color');    
        
        updateStats();
        filterTab(currentView);
    }


    if (e.target.closest('.del-btn')) {
        card.remove();
        updateStats();
        filterTab(currentView);
    }
});


document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.tab-btn.active').classList.remove('active');
        this.classList.add('active');
        
        currentView = this.innerText.toLowerCase();
        filterTab(currentView);
    });
});

function filterTab(status) {
    const cards = document.querySelectorAll('.job-card');
    let count = 0;

    cards.forEach(card => {
        const cardStatus = card.getAttribute('data-status');
        if (status === 'all' || cardStatus === status) {
            card.style.display = 'block';
            count++;
        } else {
            card.style.display = 'none';
        }
    });

    tabJobCountText.innerText = `${count} jobs`;
    emptyState.style.display = (count === 0) ? 'block' : 'none';
}

updateStats();