import React from 'react'
import FinderController from 'controller.js'
import FinderView from 'view'
import languages from 'languages'

export default class BraftFinder extends FinderController {

  constructor (props) {
    super(props)
    this.superProps = props
  }

  ReactComponent = (props = {}) => {

    const componentProps = {
      ...this.superProps,
      ...props
    }

    const language = componentProps.language ? (languages[componentProps.language] || languages['zh']) : languages['zh']

    return (
      <FinderView
        {...componentProps}
        language={language}
        controller={this}
      />
    )

  }


}