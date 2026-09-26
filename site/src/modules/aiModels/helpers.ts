/**
 * Normalize an AI provider identifier to a canonical, lowercase form.
 * Trims whitespace and lowercases the input so provider comparisons are stable.
 *
 * @param provider - The provider string to normalize (e.g. "OpenAI", "anthropic").
 * @returns The trimmed, lowercased provider identifier.
 */
export function normalizeProvider(provider: string): string {
	return provider.trim().toLowerCase();
}

/**
 * Format a reasoning-effort label for display (capitalizes the first letter).
 * Example: "xhigh" -> "Xhigh".
 *
 * @param value - The effort label to format.
 * @returns A human-friendly label with the first character uppercased.
 */
export const formatReasoningEffort = (value: string): string =>
	value.charAt(0).toUpperCase() + value.slice(1);

