const Navbar = () => {
    return React.createElement('nav', { 
        className: 'bg-white shadow-lg'
    },
        React.createElement('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        },
            React.createElement('div', {
                className: 'flex justify-between h-16'
            },
                React.createElement('div', {
                    className: 'flex'
                },
                    React.createElement('div', {
                        className: 'flex-shrink-0 flex items-center'
                    },
                        React.createElement('h1', {
                            className: 'text-xl font-bold text-purple-600'
                        }, "Ella's Playground")
                    )
                ),
                React.createElement('div', {
                    className: 'flex items-center'
                },
                    React.createElement('button', {
                        className: 'bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium'
                    }, 'Get Started')
                )
            )
        )
    );
};

const App = () => {
    const [activeSection, setActiveSection] = React.useState('explore');
    const [dailyProblem] = React.useState({
        question: "Find the derivative of f(x) = x² + 3x",
        difficulty: "Beginner"
    });

    const featuredGames = [
        {
            title: "Derivative Defense",
            description: "Tower defense with calculus twists",
            players: "2.5K playing",
            difficulty: "Medium"
        },
        {
            title: "Integration Island",
            description: "Explore the world of integrals",
            players: "1.8K playing",
            difficulty: "Easy"
        },
        {
            title: "Limit Legends",
            description: "Master the art of limits",
            players: "2.1K playing",
            difficulty: "Hard"
        }
    ];

    return React.createElement('div', { 
        className: 'min-h-screen bg-gradient-to-b from-pink-50 to-white' 
    },
        React.createElement(Navbar),
        React.createElement('main', {
            className: 'container mx-auto px-4 py-12'
        },
            React.createElement('div', { className: 'mb-8' },
                React.createElement('h1', { className: 'text-4xl font-bold text-pink-800' }, "Ella's Playground"),
                React.createElement('p', { className: 'text-gray-600' }, 'My personal calculus space')
            ),

            React.createElement('div', { className: 'text-center mb-12' },
                React.createElement('h1', { className: 'text-4xl font-bold mb-4' }, 'Calculus Quest'),
                React.createElement('p', { className: 'text-xl text-gray-600 mb-8' }, 'Learn calculus through play'),
                React.createElement('div', { className: 'flex justify-center gap-4' },
                    React.createElement('button', { className: 'primary-button', onClick: startPlaying }, 'Play Now'),
                    React.createElement('button', { className: 'secondary-button' }, 'Learn More')
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-3 gap-6 mb-12' },
                // Feature cards here
            ),

            React.createElement('div', { className: 'card mb-8' },
                React.createElement('h3', { className: 'card-title' }, 'Quick Tools'),
                React.createElement('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4' },
                    React.createElement('button', { 
                        className: 'tool-button',
                        onClick: () => setActiveSection('scratchpad')
                    }, 'Scratchpad'),
                    React.createElement('button', {
                        className: 'tool-button',
                        onClick: () => setActiveSection('calculator')
                    }, 'Calculator')
                )
            ),

            React.createElement('div', { className: 'math-container' },
                React.createElement('h2', { 
                    className: 'text-2xl font-bold mb-4' 
                }, 'Math Playground'),
                React.createElement('div', { className: 'function-input' },
                    React.createElement('input', {
                        type: 'text',
                        id: 'functionInput',
                        placeholder: 'Enter a function (e.g., x^2)',
                        className: 'animated-input'
                    }),
                    React.createElement('button', {
                        onClick: () => plotFunction(),
                        className: 'plot-button'
                    }, 'Plot ✨')
                ),
                React.createElement('div', { id: 'graphContainer' }),
                React.createElement('div', { className: 'controls' },
                    React.createElement('button', { onClick: calculateDerivative }, 'Show Derivative'),
                    React.createElement('button', { onClick: calculateIntegral }, 'Show Integral')
                )
            )
        )
    );
};
