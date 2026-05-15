# Example Test Template

This directory contains state management tests. When adding Zustand stores, add tests here.

## Example Store Test

\`\`\`typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { act } from '@testing-library/react';
import { useExampleStore } from '../exampleStore';

describe('exampleStore', () => {
beforeEach(() => {
// Reset store state before each test
useExampleStore.setState({ /_ initial state _/ });
});

it('updates state correctly', () => {
const { setState } = useExampleStore.getState();

    act(() => {
      setState({ value: 'new value' });
    });

    expect(useExampleStore.getState().value).toBe('new value');

});
});
\`\`\`
