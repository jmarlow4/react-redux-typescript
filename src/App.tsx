import * as React from 'react'
import * as PropTypes from 'prop-types'

interface AppProps extends React.Props<App> {
  txt?: string
}

interface AppState extends React.ComponentState {
  num: number
}

interface WidgetProps {
  update: (e: React.FormEvent<HTMLInputElement>) => void
}

const Widget: React.StatelessComponent<WidgetProps> = (props: WidgetProps) => <input onChange={props.update}/>

class App extends React.Component<AppProps, AppState> {
  
  static propTypes = {
    txt: PropTypes.string
  }

  static defaultProps: AppProps = {
    txt: 'Default text!'
  }

  state = {
    num: 4
  }

  update = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      num: +e.currentTarget.value
    })
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="number" onChange={this.update}/>
        <h1>{this.props.txt}, {this.state.num}</h1>
        <Widget update={(val) => console.log(val.currentTarget.value)}/>
      </div>
    )
  }
}

export default App
