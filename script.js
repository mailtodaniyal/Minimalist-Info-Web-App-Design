        // Sidebar toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('sidebar-show');
        });

        // Dark mode toggle
        document.getElementById('darkModeSwitch').addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            // You would typically save this preference to localStorage
        });

        // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Market Chart
            const marketCtx = document.getElementById('marketChart').getContext('2d');
            const marketChart = new Chart(marketCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Strom Base',
                        data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90],
                        borderColor: '#4361ee',
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Strom Peek',
                        data: [28, 48, 40, 19, 86, 27, 90, 60, 50, 70, 60, 80],
                        borderColor: '#4cc9f0',
                        backgroundColor: 'rgba(76, 201, 240, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });

            // Terminmarkt Chart
            const terminmarktCtx = document.getElementById('terminmarktChart').getContext('2d');
            const terminmarktChart = new Chart(terminmarktCtx, {
                type: 'bar',
                data: {
                    labels: ['2025', '2026', '2027', '2028'],
                    datasets: [{
                        label: 'Strom Base',
                        data: [65, 59, 80, 81],
                        backgroundColor: '#4361ee',
                        borderRadius: 4
                    }, {
                        label: 'Strom Peek',
                        data: [28, 48, 40, 19],
                        backgroundColor: '#4cc9f0',
                        borderRadius: 4
                    }, {
                        label: 'Gas',
                        data: [45, 25, 35, 50],
                        backgroundColor: '#f8961e',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            });

            // Portfolio Chart
            const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
            const portfolioChart = new Chart(portfolioCtx, {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: 'Planmenge',
                        data: [65, 59, 80, 81],
                        borderColor: '#4361ee',
                        backgroundColor: 'transparent',
                        tension: 0.4
                    }, {
                        label: 'Bereits eingedeckt',
                        data: [28, 48, 40, 19],
                        borderColor: '#4cc9f0',
                        backgroundColor: 'transparent',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        });
