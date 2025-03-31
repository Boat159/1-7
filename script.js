// หน้าแรกและหน้าความทรงจำ
const homePage = document.getElementById('home-page');
const memoryPage = document.getElementById('memory-page');
const backgroundMusic = document.getElementById('background-music');

// เพิ่ม Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#FFD700' }, // เปลี่ยนสีอนุภาคเป็นสีเหลือง
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 },
                 push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// ไปยังหน้าความทรงจำ
function goToMemoryPage() {
    homePage.classList.remove('active');
    homePage.classList.add('hidden');
    memoryPage.classList.add('active');
    // เล่นเพลงอัตโนมัติ
    backgroundMusic.src = "https://www.youtube.com/embed/PAI1TZF-Yik?autoplay=1";
}

// กลับไปหน้าแรก
function goToHomePage() {
    memoryPage.classList.remove('active');
    memoryPage.classList.add('hidden');
    homePage.classList.add('active');
    // หยุดเพลง
    backgroundMusic.src = "https://www.youtube.com/embed/PAI1TZF-Yik?autoplay=0";
}

// แชร์ให้เพื่อน
function shareMemory() {
    if (navigator.share) {
        navigator.share({
            title: 'ความทรงจำวันจบ ม.1',
            text: 'มาดูความทรงจำดีๆ ของเราด้วยกัน! 💙',
            url: window.location.href
        }).then(() => {
            console.log('แชร์สำเร็จ!');
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการแชร์:', error);
        });
    } else {
        alert('ฟังก์ชันแชร์ไม่รองรับในเบราว์เซอร์นี้ ลองคัดลอกลิงก์ไปแชร์แทนนะ!');
    }
}

// เพิ่ม div สำหรับ particles
document.body.insertAdjacentHTML('afterbegin', '<div id="particles-js"></div>');