/**
 * In-Memory Sliding Window Rate Limiter
 * Protects form endpoints from abuse, credential stuffing, and spam attacks.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipRequestMap = new Map<string, RateLimitRecord>();

// Clean up stale IP records every 10 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRequestMap.entries()) {
      if (now > record.resetTime) {
        ipRequestMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

export interface RateLimitOptions {
  limit?: number; // Max requests
  windowMs?: number; // Window size in milliseconds
}

export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { isRateLimited: boolean; remaining: number; resetTime: number } {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 10 * 60 * 1000; // 10 minutes
  const now = Date.now();

  const record = ipRequestMap.get(identifier);

  if (!record || now > record.resetTime) {
    // New or expired window
    ipRequestMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      isRateLimited: false,
      remaining: limit - 1,
      resetTime: now + windowMs,
    };
  }

  if (record.count >= limit) {
    return {
      isRateLimited: true,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count += 1;
  return {
    isRateLimited: false,
    remaining: limit - record.count,
    resetTime: record.resetTime,
  };
}
