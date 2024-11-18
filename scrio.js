// Line Chart (Attack Revenue)
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Current Week',
        data: [5000, 10000, 7000, 15000, 20000, 25000, 30000],
        borderColor: '#76c7c0',
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(118, 199, 192, 0.1)',
      },
      {
        label: 'Previous Week',
        data: [4000, 9000, 8000, 14000, 18000, 24000, 29000],
        borderColor: '#c77676',
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(199, 118, 118, 0.1)',
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#444',
        },
        beginAtZero: true,
      },
    },
  },
});

// Progress Circles (Dynamic Updates)
function animateProgress(circleId, startValue, endValue, duration) {
  const circle = document.getElementById(circleId);
  let currentValue = startValue;
  const step = (endValue - startValue) / (duration / 10);

  const interval = setInterval(() => {
    currentValue += step;
    if ((step > 0 && currentValue >= endValue) || (step < 0 && currentValue <= endValue)) {
      currentValue = endValue;
      clearInterval(interval);
    }
    circle.style.background = `conic-gradient(#76c7c0 ${currentValue}%, #444 ${currentValue}%)`;
  }, 10);
}

// Animate progress circles
animateProgress('progress1', 0, 82, 1000); // Animates to 82% in 1 second
animateProgress('progress2', 0, 60, 1000); // Animates to 60% in 1 second











// Select elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Add event listener to the toggle button
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed'); // Toggle sidebar visibility
  content.classList.toggle('full');     // Adjust content width
});




