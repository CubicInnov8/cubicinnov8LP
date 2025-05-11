// src/components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: any) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          background: '#900',
          color: '#fff',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace'
        }}>
          <h1>アプリにエラーが発生しました</h1>
          {this.state.error && (
            <>
              <div><strong>Message:</strong> {this.state.error.message}</div>
              <div><strong>Stack:</strong>{this.state.error.stack}</div>
            </>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
