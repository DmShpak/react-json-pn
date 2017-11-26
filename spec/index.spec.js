const React = require('react')
const ReactTestRenderer = require('react-test-renderer');
const { createCompiler } = require('json-pn')
const { createComponentFactory } = require('../lib/index')

describe('createComponentFactory api', () => {
    it('createComponentFactory returns function', () => {
        const factory = createComponentFactory(createCompiler())
        expect(typeof factory).toBe('function')
    })
})

describe('componentFactory', () => {
    let factory;

    beforeEach(() => {
        factory = createComponentFactory(createCompiler())
    })

    it('create component', () => {
        const component = factory(['div', {}, 'some text'])
        const renderer = ReactTestRenderer.create(React.createElement(component));
        expect(typeof component).toBe('function')
        expect(renderer.toJSON()).toEqual({ type: 'div', props: {}, children: ['some text'] })
    })

})