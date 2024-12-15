// Price update simulation
let currentPrice = 42069.88;
let selectedCrypto = 'BTC';

function updatePrice() {
    currentPrice += (Math.random() - 0.5) * 100;
    document.getElementById('price-display').textContent = `$${currentPrice.toFixed(2)}`;
}

setInterval(updatePrice, 2000);

// Pair selection
document.querySelectorAll('.pair-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.pair-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedCrypto = button.dataset.pair;
        updateTrades();
    });
});

// Generate random trades
function generateTrade() {
    const address = `0x${Math.random().toString(16).slice(2, 10)}...`;
    const amount = (Math.random() * 10).toFixed(4);
    const value = (Math.random() * 50000).toFixed(2);
    return `
        <div class="trade-row">
            <span>${address}</span>
            <span>${amount} ${selectedCrypto}</span>
            <span>$${value}</span>
        </div>
    `;
}

function updateTrades() {
    const tradesList = document.getElementById('trades-list');
    tradesList.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        tradesList.innerHTML += generateTrade();
    }
}

// Initial trades
updateTrades();

// Update trades periodically
setInterval(updateTrades, 5000);

// Visitor counter
let visitorCount = 1337;

function updateVisitorCount() {
    visitorCount += Math.floor(Math.random() * 5) + 1;
    document.getElementById('visitor-count').textContent = visitorCount;
}

setInterval(updateVisitorCount, 3000);

// Button click effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU9vT18A');
        audio.play().catch(() => {}); // Ignore errors if audio can't play
    });
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate': 'rotate 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'brightness(100%)' },
          '50%': { filter: 'brightness(150%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};