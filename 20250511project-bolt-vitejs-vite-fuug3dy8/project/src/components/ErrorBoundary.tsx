// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react'

interface State { hasError: boolean; error?: Error }
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'white', background: '#900' }}>
          <h1>アプリにエラーが発生しました</h1>
          <pre>{this.state.error?.message}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
