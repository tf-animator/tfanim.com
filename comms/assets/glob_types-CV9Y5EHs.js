var e=`
import type { ScriptFNote } from "./trilium-script-api";

interface TriliumGlobFroca {
    getNote(noteId: string, silentNotFoundError?: boolean): Promise<ScriptFNote | null>;
    getNoteFromCache(noteId: string): ScriptFNote | undefined;
    getNotes(noteIds: string[], silentNotFoundError?: boolean): Promise<ScriptFNote[]>;
    getNotesFromCache(noteIds: string[], silentNotFoundError?: boolean): ScriptFNote[];
}

/**
 * The global \`glob\` object, available to frontend scripts in the browser
 * (\`window.glob\`). Holds bootstrap configuration sent by the server plus a few
 * client helpers. Most scripting should go through the \`api\` global instead;
 * \`glob\` is useful for environment/version checks and low-level access.
 */
interface TriliumGlob {
    /** Whether the client is running the desktop (Electron) layout. */
    isDesktop(): boolean;
    /** Whether the client is running the mobile layout. */
    isMobile(): boolean;
    /** The note currently active in the focused tab, or null if none. */
    getActiveContextNote(): ScriptFNote | null;
    /** Resolved theme style after applying the "auto" preference. */
    getThemeStyle(): "auto" | "light" | "dark";
    /** HTTP headers (incl. CSRF token) to attach to manual fetch/XHR calls. */
    getHeaders(): Promise<Record<string, string>>;
    /** Human-readable title for a reference link, resolved asynchronously. */
    getReferenceLinkTitle(href: string): Promise<string>;
    /** Human-readable title for a reference link, resolved from cache synchronously. */
    getReferenceLinkTitleSync(href: string): string;
    /** Client-side note cache (Froca). Prefer \`api\` methods where available. */
    froca: TriliumGlobFroca;
    /** Alias of \`froca\` kept for backwards compatibility. */
    treeCache: TriliumGlobFroca;

    /** Display name of this Trilium instance, or null if unset. */
    instanceName: string | null;
    /** Running version of Trilium. */
    triliumVersion: string;
    /** Whether the client is running inside Electron (desktop app). */
    isElectron: boolean;
    /** Whether the client is the standalone (in-browser, WASM) build. */
    isStandalone: boolean;
    /** Whether this is a development build. */
    isDev: boolean;
    /** Active UI locale code (e.g. "en", "de"). */
    currentLocale: string;
    /** Whether the active locale is right-to-left. */
    isRtl: boolean;
    /** Base URL prefix for the internal REST API. */
    baseApiUrl: string;
    /** URL prefix under which static assets are served. */
    assetPath: string;
    /** Application path prefix Trilium is mounted at. */
    appPath: string;

    /**
     * The root client application context — a large, dynamic internal object
     * exposed for debugging. Untyped on purpose; prefer the \`api\` global.
     */
    appContext: unknown;
    /** Resolve the widget/component bound to a DOM element. Internal. */
    getComponentByEl(el: unknown): unknown;
}

declare global {
    // eslint-disable-next-line no-var
    var glob: TriliumGlob;
}
`;export{e as globGlobals};