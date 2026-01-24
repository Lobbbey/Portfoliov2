import '@testing-library/jest-dom'

// 1. Mock IntersectionObserver (Required for useInView)
class IntersectionObserverMock {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})

// 2. Mock ResizeObserver (Required for some responsive layouts)
class ResizeObserverMock {
  observe = jest.fn()
  disconnect = jest.fn()
  unobserve = jest.fn()
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserverMock,
})

// 3. Mock window.scrollTo (Used in your Navigation)
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });