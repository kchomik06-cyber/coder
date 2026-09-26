import type { AgentChatSendShortcut } from "#/api/typesGenerated";

/**
 * Default send shortcut used until the user preferences finish loading.
 */
export const DEFAULT_AGENT_CHAT_SEND_SHORTCUT: AgentChatSendShortcut = "enter";

/**
 * Safer loading-time fallback that preserves newline insertion when settings are
 * still being hydrated.
 */
export const MODIFIER_AGENT_CHAT_SEND_SHORTCUT: AgentChatSendShortcut =
	"modifier_enter";

/**
 * Resolves the active send action for the agent chat composer.
 *
 * When the saved preference is unavailable, prefer the modifier shortcut while
 * the user settings are still loading so the composer does not accidentally send
 * an unfinished draft on Enter.
 */
export function getAgentChatSendShortcut(
	storedShortcut: AgentChatSendShortcut | undefined,
	isLoading: boolean,
): AgentChatSendShortcut {
	if (storedShortcut) {
		return storedShortcut;
	}
	// Keep the loading fallback conservative. If a user saved
	// modifier_enter, falling back to enter before preferences load can
	// send a draft when they intended to insert a newline.
	return isLoading
		? MODIFIER_AGENT_CHAT_SEND_SHORTCUT
		: DEFAULT_AGENT_CHAT_SEND_SHORTCUT;
}
