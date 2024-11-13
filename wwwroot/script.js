const { useState, useEffect } = React;

// Initialize React root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

let currentGameIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    initializePlot();
    updateFeaturedGame();
});

function updateFeaturedGame(index) {
    // This functionality is now handled by React state
    console.log('Game updated:', index);
}

function startPlaying() {
    document.querySelector('.math-container').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function initializePlot() {
    console.log('Initializing plot');
    plotFunction('x^2');
}

function plotFunction(func = null) {
    const functionInput = document.getElementById('functionInput');
    const expression = func || functionInput.value || 'x^2';
    console.log('Plotting function:', expression);

    try {
        // Generate x values
        const xValues = numeric.linspace(-10, 10, 200);
        
        // Calculate y values
        const yValues = xValues.map(x => {
            const scope = { x: x };
            return math.evaluate(expression, scope);
        });

        const trace = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: 'f(x)',
            line: {
                color: '#2c3e50',
                width: 2
            }
        };

        const layout = {
            title: `f(x) = ${expression}`,
            xaxis: {
                title: 'x',
                zeroline: true,
                gridcolor: '#e9ecef'
            },
            yaxis: {
                title: 'y',
                zeroline: true,
                gridcolor: '#e9ecef'
            },
            paper_bgcolor: 'white',
            plot_bgcolor: 'white',
            margin: { t: 40, b: 40, l: 40, r: 40 }
        };

        Plotly.newPlot('graphContainer', [trace], layout);
    } catch (error) {
        console.error('Error plotting function:', error);
        alert('Invalid function! Please check your input. Error: ' + error.message);
    }
}

function calculateDerivative() {
    const functionInput = document.getElementById('functionInput');
    const expression = functionInput.value;

    try {
        const derivative = math.derivative(expression, 'x').toString();
        
        // Plot both original function and derivative
        plotFunctionWithDerivative(expression, derivative);
    } catch (error) {
        alert('Unable to calculate derivative. Please check your input.');
    }
}

function calculateIntegral() {
    const functionInput = document.getElementById('functionInput');
    const expression = functionInput.value;

    try {
        // For visualization, we'll show the definite integral from -5 to x
        const xValues = numeric.linspace(-10, 10, 200);
        const integralValues = xValues.map(x => {
            return math.integrate(expression, 'x', -5, x);
        });

        const trace = {
            x: xValues,
            y: integralValues,
            type: 'scatter',
            mode: 'lines',
            name: 'Integral',
            fill: 'tozeroy'
        }
        
        // Add the integral to the current plot
        Plotly.addTraces('graphContainer', trace);
    } catch (error) {
        alert('Unable to calculate integral. Please check your input.');
    }
}

// Render React App
root.render(React.createElement(App));
