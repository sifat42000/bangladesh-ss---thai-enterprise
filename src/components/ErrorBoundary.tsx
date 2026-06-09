import React from 'react';

type State = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // You could log to an external service here
    // console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[300px] flex items-center justify-center p-8 bg-brand-navy rounded-[2rem] border border-white/5">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">কিছু ভুল হয়েছে</h3>
            <p className="text-brand-silver">পেজ লোডে সমস্যা হয়েছে — অনুগ্রহ করে পরে আবার চেষ্টা করুন।</p>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
