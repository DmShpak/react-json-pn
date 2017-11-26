import * as React from 'react'
import { createCompiler, defaultOperationsMap, Compiler } from 'json-pn'


type NodeComponent = string
type NodeArributes = object
type NodeChildren = NodeChildrenArray | string
interface NodeChildrenArray extends Array<Template> { }
type Template = [NodeComponent, NodeArributes, NodeChildren]


const parseChildren = (children: NodeChildren) => {

    switch (typeof children) {
        case 'number':
        case 'string':
            return children
        default:
            if (Array.isArray(children)) {
                return children.map(item => renderTemplate(item))
            }
            return null
    }
}

const parseNode = (node: NodeComponent) => node

const parseAttrs = (attrs: NodeArributes) => attrs

const renderTemplate = ([node, attrs, children]: Template): JSX.Element => React.createElement(
    parseNode(node),
    parseAttrs(attrs),
    parseChildren(children)
)

export const createComponentFactory = (compiler: Compiler) => <T>(template: any): React.StatelessComponent<T> => {
    const templateFunction = compiler<T>(template)
    return (props: T) => renderTemplate(templateFunction(props) as Template)
}


