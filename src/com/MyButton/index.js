import React from 'react'
import cssModules from 'react-css-modules'
import styles from './index.css'

@cssModules(styles, {allowMultiple: true})
export default class MyButton extends React.Component {

    render() {
        const { type, arrow, disabled, primary, children } = this.props

        let btnClasses = 'button'
        let attrs = {}

        if (primary) btnClasses += ' primary'
        if (arrow) btnClasses += ' with-arrow'

        if (disabled) attrs.disabled = 'disabled'

        // if (touched && error) labelClasses += ' error'
        // if (dirty) labelClasses += ' filled'

        return (
            <button type={type} styleName={btnClasses} {...attrs} ><span>{children ? children : ''}</span></button>
        )
    }
}