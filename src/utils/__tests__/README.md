# Example API Test Template

This directory contains API utility tests. When adding API functions, add tests here.

## Example API Test

\`\`\`typescript
import { describe, it, expect, vi } from 'vitest';
import { requestExampleApi } from '../requestExampleApi';

describe('requestExampleApi', () => {
it('fetches data successfully', async () => {
// Mock fetch
global.fetch = vi.fn().mockResolvedValue({
ok: true,
json: async () => ({ data: 'test' }),
});

    const result = await requestExampleApi();

    expect(result).toEqual({ data: 'test' });
    expect(global.fetch).toHaveBeenCalledTimes(1);

});

it('handles errors correctly', async () => {
global.fetch = vi.fn().mockResolvedValue({
ok: false,
status: 404,
});

    await expect(requestExampleApi()).rejects.toThrow();

});
});
\`\`\`
