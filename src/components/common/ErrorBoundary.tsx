import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // You can also log error to an error reporting service here
    console.error('ErrorBoundary caught an error', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong.</Text>
          <Text style={styles.message}>{this.state.error?.message}</Text>
          <Button title="Try Again" onPress={this.handleReset} />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff0000',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ErrorBoundary;
