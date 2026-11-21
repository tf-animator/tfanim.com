var e=`import { ErrorInfo, PreactContext, Ref, RefObject } from '../../src/index';

type Inputs = ReadonlyArray<unknown>;

export type Dispatch<A> = (value: A) => void;
export type StateUpdater<S> = S | ((prevState: S) => S);

/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The initial value (or a function that returns the initial value)
 */
export function useState<S>(
	initialState: S | (() => S)
): [S, Dispatch<StateUpdater<S>>];

export function useState<S = undefined>(): [
	S | undefined,
	Dispatch<StateUpdater<S | undefined>>
];

export type Reducer<S, A> = (prevState: S, action: A) => S;

/**
 * An alternative to \`useState\`.
 *
 * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass \`dispatch\` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialState The initial value to store as state
 */
export function useReducer<S, A>(
	reducer: Reducer<S, A>,
	initialState: S
): [S, Dispatch<A>];

/**
 * An alternative to \`useState\`.
 *
 * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass \`dispatch\` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialArg The initial argument to pass to the \`init\` function
 * @param init A function that, given the \`initialArg\`, returns the initial value to store as state
 */
export function useReducer<S, A, I>(
	reducer: Reducer<S, A>,
	initialArg: I,
	init: (arg: I) => S
): [S, Dispatch<A>];

/**
 * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
 * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
 *
 * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 *
 * @param initialValue the initial value to store in the ref object
 */
export function useRef<T>(initialValue: T): RefObject<T>;
export function useRef<T>(initialValue: T | null): RefObject<T | null>;
export function useRef<T>(
	initialValue: T | undefined
): RefObject<T | undefined>;

type EffectCallback = () => void | (() => void);
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after browser paint, without blocking it.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useEffect(effect: EffectCallback, inputs?: Inputs): void;

type CreateHandle = () => object;

/**
 * @param ref The ref that will be mutated
 * @param create The function that will be executed to get the value that will be attached to
 * ref.current
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useImperativeHandle<T, R extends T>(
	ref: Ref<T>,
	create: () => R,
	inputs?: Inputs
): void;

/**
 * Accepts a function that contains imperative, possibly effectful code.
 * Use this to read layout from the DOM and synchronously re-render.
 * Updates scheduled inside \`useLayoutEffect\` will be flushed synchronously, after all DOM mutations but before the browser has a chance to paint.
 * Prefer the standard \`useEffect\` hook when possible to avoid blocking visual updates.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export function useLayoutEffect(effect: EffectCallback, inputs?: Inputs): void;

/**
 * Returns a memoized version of the callback that only changes if one of the \`inputs\`
 * has changed (using ===).
 */
export function useCallback<T extends Function>(callback: T, inputs: Inputs): T;

/**
 * Pass a factory function and an array of inputs.
 * useMemo will only recompute the memoized value when one of the inputs has changed.
 * This optimization helps to avoid expensive calculations on every render.
 * If no array is provided, a new value will be computed whenever a new function instance is passed as the first argument.
 */
// for \`inputs\`, allow undefined, but don't make it optional as that is very likely a mistake
export function useMemo<T>(factory: () => T, inputs: Inputs | undefined): T;

/**
 * Returns the current context value, as given by the nearest context provider for the given context.
 * When the provider updates, this Hook will trigger a rerender with the latest context value.
 *
 * @param context The context you want to use
 */
export function useContext<T>(context: PreactContext<T>): T;

/**
 * Customize the displayed value in the devtools panel.
 *
 * @param value Custom hook name or object that is passed to formatter
 * @param formatter Formatter to modify value before sending it to the devtools
 */
export function useDebugValue<T>(value: T, formatter?: (value: T) => any): void;

export function useErrorBoundary(
	callback?: (error: any, errorInfo: ErrorInfo) => Promise<void> | void
): [any, () => void];

export function useId(): string;
`,t=`export { Fragment } from '../../src/index';
import {
	ComponentType,
	ComponentChild,
	ComponentChildren,
	VNode,
	Attributes,
	HTMLAttributes,
	SVGAttributes
} from '../../src/index';
import { JSXInternal } from '../../src/jsx';

export function jsx(
	type: string,
	props: HTMLAttributes &
		SVGAttributes &
		Record<string, any> & { children?: ComponentChild },
	key?: string
): VNode<any>;
export function jsx<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChild },
	key?: string
): VNode<any>;

export function jsxs(
	type: string,
	props: HTMLAttributes &
		SVGAttributes &
		Record<string, any> & { children?: ComponentChild[] },
	key?: string
): VNode<any>;
export function jsxs<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChild[] },
	key?: string
): VNode<any>;

export function jsxDEV(
	type: string,
	props: HTMLAttributes &
		SVGAttributes &
		Record<string, any> & { children?: ComponentChildren },
	key?: string
): VNode<any>;
export function jsxDEV<P>(
	type: ComponentType<P>,
	props: Attributes & P & { children?: ComponentChildren },
	key?: string
): VNode<any>;

// These are not expected to be used manually, but by a JSX transform
export function jsxTemplate(
	template: string[],
	...expressions: any[]
): VNode<any>;
export function jsxAttr(name: string, value: any): string | null;
export function jsxEscape<T>(
	value: T
): string | null | VNode<any> | Array<string | null | VNode>;

export { JSXInternal as JSX };
`,n=`// Most of our DOM-ish types

import { ClassAttributes, PreactDOMAttributes } from './index';

// Implementations of some DOM events that are not available in TS 5.1
interface ToggleEvent extends Event {
	readonly newState: string;
	readonly oldState: string;
}

declare var ToggleEvent: {
	prototype: ToggleEvent;
	new (type: string, eventInitDict?: ToggleEventInit): ToggleEvent;
};

interface ToggleEventInit extends EventInit {
	newState?: string;
	oldState?: string;
}

interface CommandEvent extends Event {
	readonly source: Element | null;
	readonly command: string;
}

declare var CommandEvent: {
	prototype: CommandEvent;
	new (type: string, eventInitDict?: CommandEventInit): CommandEvent;
};

interface CommandEventInit extends EventInit {
	source: Element | null;
	command: string;
}

/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/SnapEvent) */
interface SnapEvent extends Event {
	readonly snapTargetBlock: Element | null;
	readonly snapTargetInline: Element | null;
}

declare var SnapEvent: {
	prototype: SnapEvent;
	new (type: string, eventInitDict?: SnapEventInit): SnapEvent;
};

interface SnapEventInit extends EventInit {
	snapTargetBlock?: Element | null;
	snapTargetInline?: Element | null;
}

type Booleanish = boolean | 'true' | 'false';

export interface SignalLike<T> {
	value: T;
	peek(): T;
	subscribe(fn: (value: T) => void): () => void;
}

export type Signalish<T> = T | SignalLike<T>;

export type UnpackSignal<T> = T extends SignalLike<infer V> ? V : T;

export type DOMCSSProperties = {
	[key in keyof Omit<
		CSSStyleDeclaration,
		| 'item'
		| 'setProperty'
		| 'removeProperty'
		| 'getPropertyValue'
		| 'getPropertyPriority'
	>]?: string | number | null | undefined;
};
export type AllCSSProperties = {
	[key: string]: string | number | null | undefined;
};
export interface CSSProperties extends AllCSSProperties, DOMCSSProperties {
	cssText?: string | null;
}

export interface SVGAttributes<
	Target extends EventTarget = SVGElement
> extends HTMLAttributes<Target> {
	'accent-height'?: Signalish<number | string | undefined>;
	accentHeight?: Signalish<number | string | undefined>;
	accumulate?: Signalish<'none' | 'sum' | undefined>;
	additive?: Signalish<'replace' | 'sum' | undefined>;
	'alignment-baseline'?: Signalish<
		| 'auto'
		| 'baseline'
		| 'before-edge'
		| 'text-before-edge'
		| 'middle'
		| 'central'
		| 'after-edge'
		| 'text-after-edge'
		| 'ideographic'
		| 'alphabetic'
		| 'hanging'
		| 'mathematical'
		| 'inherit'
		| undefined
	>;
	alignmentBaseline?: Signalish<
		| 'auto'
		| 'baseline'
		| 'before-edge'
		| 'text-before-edge'
		| 'middle'
		| 'central'
		| 'after-edge'
		| 'text-after-edge'
		| 'ideographic'
		| 'alphabetic'
		| 'hanging'
		| 'mathematical'
		| 'inherit'
		| undefined
	>;
	'allow-reorder'?: Signalish<'no' | 'yes' | undefined>;
	allowReorder?: Signalish<'no' | 'yes' | undefined>;
	alphabetic?: Signalish<number | string | undefined>;
	amplitude?: Signalish<number | string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
	'arabic-form'?: Signalish<
		'initial' | 'medial' | 'terminal' | 'isolated' | undefined
	>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
	arabicForm?: Signalish<
		'initial' | 'medial' | 'terminal' | 'isolated' | undefined
	>;
	ascent?: Signalish<number | string | undefined>;
	attributeName?: Signalish<string | undefined>;
	attributeType?: Signalish<string | undefined>;
	azimuth?: Signalish<number | string | undefined>;
	baseFrequency?: Signalish<number | string | undefined>;
	'baseline-shift'?: Signalish<number | string | undefined>;
	baselineShift?: Signalish<number | string | undefined>;
	baseProfile?: Signalish<number | string | undefined>;
	bbox?: Signalish<number | string | undefined>;
	begin?: Signalish<number | string | undefined>;
	bias?: Signalish<number | string | undefined>;
	by?: Signalish<number | string | undefined>;
	calcMode?: Signalish<number | string | undefined>;
	'cap-height'?: Signalish<number | string | undefined>;
	capHeight?: Signalish<number | string | undefined>;
	clip?: Signalish<number | string | undefined>;
	'clip-path'?: Signalish<string | undefined>;
	clipPath?: Signalish<string | undefined>;
	clipPathUnits?: Signalish<number | string | undefined>;
	'clip-rule'?: Signalish<number | string | undefined>;
	clipRule?: Signalish<number | string | undefined>;
	'color-interpolation'?: Signalish<number | string | undefined>;
	colorInterpolation?: Signalish<number | string | undefined>;
	'color-interpolation-filters'?: Signalish<
		'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined
	>;
	colorInterpolationFilters?: Signalish<
		'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined
	>;
	'color-profile'?: Signalish<number | string | undefined>;
	colorProfile?: Signalish<number | string | undefined>;
	'color-rendering'?: Signalish<number | string | undefined>;
	colorRendering?: Signalish<number | string | undefined>;
	'content-script-type'?: Signalish<number | string | undefined>;
	contentScriptType?: Signalish<number | string | undefined>;
	'content-style-type'?: Signalish<number | string | undefined>;
	contentStyleType?: Signalish<number | string | undefined>;
	cursor?: Signalish<number | string | undefined>;
	cx?: Signalish<number | string | undefined>;
	cy?: Signalish<number | string | undefined>;
	d?: Signalish<string | undefined>;
	decelerate?: Signalish<number | string | undefined>;
	descent?: Signalish<number | string | undefined>;
	diffuseConstant?: Signalish<number | string | undefined>;
	direction?: Signalish<number | string | undefined>;
	display?: Signalish<number | string | undefined>;
	divisor?: Signalish<number | string | undefined>;
	'dominant-baseline'?: Signalish<number | string | undefined>;
	dominantBaseline?: Signalish<number | string | undefined>;
	dur?: Signalish<number | string | undefined>;
	dx?: Signalish<number | string | undefined>;
	dy?: Signalish<number | string | undefined>;
	edgeMode?: Signalish<number | string | undefined>;
	elevation?: Signalish<number | string | undefined>;
	'enable-background'?: Signalish<number | string | undefined>;
	enableBackground?: Signalish<number | string | undefined>;
	end?: Signalish<number | string | undefined>;
	exponent?: Signalish<number | string | undefined>;
	externalResourcesRequired?: Signalish<number | string | undefined>;
	fill?: Signalish<string | undefined>;
	'fill-opacity'?: Signalish<number | string | undefined>;
	fillOpacity?: Signalish<number | string | undefined>;
	'fill-rule'?: Signalish<'nonzero' | 'evenodd' | 'inherit' | undefined>;
	fillRule?: Signalish<'nonzero' | 'evenodd' | 'inherit' | undefined>;
	filter?: Signalish<string | undefined>;
	filterRes?: Signalish<number | string | undefined>;
	filterUnits?: Signalish<number | string | undefined>;
	'flood-color'?: Signalish<number | string | undefined>;
	floodColor?: Signalish<number | string | undefined>;
	'flood-opacity'?: Signalish<number | string | undefined>;
	floodOpacity?: Signalish<number | string | undefined>;
	focusable?: Signalish<number | string | undefined>;
	'font-family'?: Signalish<string | undefined>;
	fontFamily?: Signalish<string | undefined>;
	'font-size'?: Signalish<number | string | undefined>;
	fontSize?: Signalish<number | string | undefined>;
	'font-size-adjust'?: Signalish<number | string | undefined>;
	fontSizeAdjust?: Signalish<number | string | undefined>;
	'font-stretch'?: Signalish<number | string | undefined>;
	fontStretch?: Signalish<number | string | undefined>;
	'font-style'?: Signalish<number | string | undefined>;
	fontStyle?: Signalish<number | string | undefined>;
	'font-variant'?: Signalish<number | string | undefined>;
	fontVariant?: Signalish<number | string | undefined>;
	'font-weight'?: Signalish<number | string | undefined>;
	fontWeight?: Signalish<number | string | undefined>;
	format?: Signalish<number | string | undefined>;
	from?: Signalish<number | string | undefined>;
	fx?: Signalish<number | string | undefined>;
	fy?: Signalish<number | string | undefined>;
	g1?: Signalish<number | string | undefined>;
	g2?: Signalish<number | string | undefined>;
	'glyph-name'?: Signalish<number | string | undefined>;
	glyphName?: Signalish<number | string | undefined>;
	'glyph-orientation-horizontal'?: Signalish<number | string | undefined>;
	glyphOrientationHorizontal?: Signalish<number | string | undefined>;
	'glyph-orientation-vertical'?: Signalish<number | string | undefined>;
	glyphOrientationVertical?: Signalish<number | string | undefined>;
	glyphRef?: Signalish<number | string | undefined>;
	gradientTransform?: Signalish<string | undefined>;
	gradientUnits?: Signalish<string | undefined>;
	hanging?: Signalish<number | string | undefined>;
	height?: Signalish<number | string | undefined>;
	'horiz-adv-x'?: Signalish<number | string | undefined>;
	horizAdvX?: Signalish<number | string | undefined>;
	'horiz-origin-x'?: Signalish<number | string | undefined>;
	horizOriginX?: Signalish<number | string | undefined>;
	href?: Signalish<string | undefined>;
	hreflang?: Signalish<string | undefined>;
	hrefLang?: Signalish<string | undefined>;
	ideographic?: Signalish<number | string | undefined>;
	'image-rendering'?: Signalish<number | string | undefined>;
	imageRendering?: Signalish<number | string | undefined>;
	in2?: Signalish<number | string | undefined>;
	in?: Signalish<string | undefined>;
	intercept?: Signalish<number | string | undefined>;
	k1?: Signalish<number | string | undefined>;
	k2?: Signalish<number | string | undefined>;
	k3?: Signalish<number | string | undefined>;
	k4?: Signalish<number | string | undefined>;
	k?: Signalish<number | string | undefined>;
	kernelMatrix?: Signalish<number | string | undefined>;
	kernelUnitLength?: Signalish<number | string | undefined>;
	kerning?: Signalish<number | string | undefined>;
	keyPoints?: Signalish<number | string | undefined>;
	keySplines?: Signalish<number | string | undefined>;
	keyTimes?: Signalish<number | string | undefined>;
	lengthAdjust?: Signalish<number | string | undefined>;
	'letter-spacing'?: Signalish<number | string | undefined>;
	letterSpacing?: Signalish<number | string | undefined>;
	'lighting-color'?: Signalish<number | string | undefined>;
	lightingColor?: Signalish<number | string | undefined>;
	limitingConeAngle?: Signalish<number | string | undefined>;
	local?: Signalish<number | string | undefined>;
	'marker-end'?: Signalish<string | undefined>;
	markerEnd?: Signalish<string | undefined>;
	markerHeight?: Signalish<number | string | undefined>;
	'marker-mid'?: Signalish<string | undefined>;
	markerMid?: Signalish<string | undefined>;
	'marker-start'?: Signalish<string | undefined>;
	markerStart?: Signalish<string | undefined>;
	markerUnits?: Signalish<number | string | undefined>;
	markerWidth?: Signalish<number | string | undefined>;
	mask?: Signalish<string | undefined>;
	maskContentUnits?: Signalish<number | string | undefined>;
	maskUnits?: Signalish<number | string | undefined>;
	mathematical?: Signalish<number | string | undefined>;
	mode?: Signalish<number | string | undefined>;
	numOctaves?: Signalish<number | string | undefined>;
	offset?: Signalish<number | string | undefined>;
	opacity?: Signalish<number | string | undefined>;
	operator?: Signalish<number | string | undefined>;
	order?: Signalish<number | string | undefined>;
	orient?: Signalish<number | string | undefined>;
	orientation?: Signalish<number | string | undefined>;
	origin?: Signalish<number | string | undefined>;
	overflow?: Signalish<number | string | undefined>;
	'overline-position'?: Signalish<number | string | undefined>;
	overlinePosition?: Signalish<number | string | undefined>;
	'overline-thickness'?: Signalish<number | string | undefined>;
	overlineThickness?: Signalish<number | string | undefined>;
	'paint-order'?: Signalish<number | string | undefined>;
	paintOrder?: Signalish<number | string | undefined>;
	'panose-1'?: Signalish<number | string | undefined>;
	panose1?: Signalish<number | string | undefined>;
	pathLength?: Signalish<number | string | undefined>;
	patternContentUnits?: Signalish<string | undefined>;
	patternTransform?: Signalish<number | string | undefined>;
	patternUnits?: Signalish<string | undefined>;
	'pointer-events'?: Signalish<number | string | undefined>;
	pointerEvents?: Signalish<number | string | undefined>;
	points?: Signalish<string | undefined>;
	pointsAtX?: Signalish<number | string | undefined>;
	pointsAtY?: Signalish<number | string | undefined>;
	pointsAtZ?: Signalish<number | string | undefined>;
	preserveAlpha?: Signalish<number | string | undefined>;
	preserveAspectRatio?: Signalish<string | undefined>;
	primitiveUnits?: Signalish<number | string | undefined>;
	r?: Signalish<number | string | undefined>;
	radius?: Signalish<number | string | undefined>;
	refX?: Signalish<number | string | undefined>;
	refY?: Signalish<number | string | undefined>;
	'rendering-intent'?: Signalish<number | string | undefined>;
	renderingIntent?: Signalish<number | string | undefined>;
	repeatCount?: Signalish<number | string | undefined>;
	repeatDur?: Signalish<number | string | undefined>;
	requiredExtensions?: Signalish<number | string | undefined>;
	requiredFeatures?: Signalish<number | string | undefined>;
	restart?: Signalish<number | string | undefined>;
	result?: Signalish<string | undefined>;
	rotate?: Signalish<number | string | undefined>;
	rx?: Signalish<number | string | undefined>;
	ry?: Signalish<number | string | undefined>;
	scale?: Signalish<number | string | undefined>;
	seed?: Signalish<number | string | undefined>;
	'shape-rendering'?: Signalish<number | string | undefined>;
	shapeRendering?: Signalish<number | string | undefined>;
	slope?: Signalish<number | string | undefined>;
	spacing?: Signalish<number | string | undefined>;
	specularConstant?: Signalish<number | string | undefined>;
	specularExponent?: Signalish<number | string | undefined>;
	speed?: Signalish<number | string | undefined>;
	spreadMethod?: Signalish<string | undefined>;
	startOffset?: Signalish<number | string | undefined>;
	stdDeviation?: Signalish<number | string | undefined>;
	stemh?: Signalish<number | string | undefined>;
	stemv?: Signalish<number | string | undefined>;
	stitchTiles?: Signalish<number | string | undefined>;
	'stop-color'?: Signalish<string | undefined>;
	stopColor?: Signalish<string | undefined>;
	'stop-opacity'?: Signalish<number | string | undefined>;
	stopOpacity?: Signalish<number | string | undefined>;
	'strikethrough-position'?: Signalish<number | string | undefined>;
	strikethroughPosition?: Signalish<number | string | undefined>;
	'strikethrough-thickness'?: Signalish<number | string | undefined>;
	strikethroughThickness?: Signalish<number | string | undefined>;
	string?: Signalish<number | string | undefined>;
	stroke?: Signalish<string | undefined>;
	'stroke-dasharray'?: Signalish<string | number | undefined>;
	strokeDasharray?: Signalish<string | number | undefined>;
	'stroke-dashoffset'?: Signalish<string | number | undefined>;
	strokeDashoffset?: Signalish<string | number | undefined>;
	'stroke-linecap'?: Signalish<
		'butt' | 'round' | 'square' | 'inherit' | undefined
	>;
	strokeLinecap?: Signalish<
		'butt' | 'round' | 'square' | 'inherit' | undefined
	>;
	'stroke-linejoin'?: Signalish<
		'miter' | 'round' | 'bevel' | 'inherit' | undefined
	>;
	strokeLinejoin?: Signalish<
		'miter' | 'round' | 'bevel' | 'inherit' | undefined
	>;
	'stroke-miterlimit'?: Signalish<string | number | undefined>;
	strokeMiterlimit?: Signalish<string | number | undefined>;
	'stroke-opacity'?: Signalish<number | string | undefined>;
	strokeOpacity?: Signalish<number | string | undefined>;
	'stroke-width'?: Signalish<number | string | undefined>;
	strokeWidth?: Signalish<number | string | undefined>;
	surfaceScale?: Signalish<number | string | undefined>;
	systemLanguage?: Signalish<number | string | undefined>;
	tableValues?: Signalish<number | string | undefined>;
	targetX?: Signalish<number | string | undefined>;
	targetY?: Signalish<number | string | undefined>;
	'text-anchor'?: Signalish<string | undefined>;
	textAnchor?: Signalish<string | undefined>;
	'text-decoration'?: Signalish<number | string | undefined>;
	textDecoration?: Signalish<number | string | undefined>;
	textLength?: Signalish<number | string | undefined>;
	'text-rendering'?: Signalish<number | string | undefined>;
	textRendering?: Signalish<number | string | undefined>;
	to?: Signalish<number | string | undefined>;
	transform?: Signalish<string | undefined>;
	'transform-origin'?: Signalish<string | undefined>;
	transformOrigin?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
	u1?: Signalish<number | string | undefined>;
	u2?: Signalish<number | string | undefined>;
	'underline-position'?: Signalish<number | string | undefined>;
	underlinePosition?: Signalish<number | string | undefined>;
	'underline-thickness'?: Signalish<number | string | undefined>;
	underlineThickness?: Signalish<number | string | undefined>;
	unicode?: Signalish<number | string | undefined>;
	'unicode-bidi'?: Signalish<number | string | undefined>;
	unicodeBidi?: Signalish<number | string | undefined>;
	'unicode-range'?: Signalish<number | string | undefined>;
	unicodeRange?: Signalish<number | string | undefined>;
	'units-per-em'?: Signalish<number | string | undefined>;
	unitsPerEm?: Signalish<number | string | undefined>;
	'v-alphabetic'?: Signalish<number | string | undefined>;
	vAlphabetic?: Signalish<number | string | undefined>;
	values?: Signalish<string | undefined>;
	'vector-effect'?: Signalish<number | string | undefined>;
	vectorEffect?: Signalish<number | string | undefined>;
	version?: Signalish<string | undefined>;
	'vert-adv-y'?: Signalish<number | string | undefined>;
	vertAdvY?: Signalish<number | string | undefined>;
	'vert-origin-x'?: Signalish<number | string | undefined>;
	vertOriginX?: Signalish<number | string | undefined>;
	'vert-origin-y'?: Signalish<number | string | undefined>;
	vertOriginY?: Signalish<number | string | undefined>;
	'v-hanging'?: Signalish<number | string | undefined>;
	vHanging?: Signalish<number | string | undefined>;
	'v-ideographic'?: Signalish<number | string | undefined>;
	vIdeographic?: Signalish<number | string | undefined>;
	viewBox?: Signalish<string | undefined>;
	viewTarget?: Signalish<number | string | undefined>;
	visibility?: Signalish<number | string | undefined>;
	'v-mathematical'?: Signalish<number | string | undefined>;
	vMathematical?: Signalish<number | string | undefined>;
	width?: Signalish<number | string | undefined>;
	'word-spacing'?: Signalish<number | string | undefined>;
	wordSpacing?: Signalish<number | string | undefined>;
	'writing-mode'?: Signalish<number | string | undefined>;
	writingMode?: Signalish<number | string | undefined>;
	x1?: Signalish<number | string | undefined>;
	x2?: Signalish<number | string | undefined>;
	x?: Signalish<number | string | undefined>;
	xChannelSelector?: Signalish<string | undefined>;
	'x-height'?: Signalish<number | string | undefined>;
	xHeight?: Signalish<number | string | undefined>;
	'xlink:actuate'?: Signalish<SVGAttributes['xlinkActuate']>;
	xlinkActuate?: Signalish<string | undefined>;
	'xlink:arcrole'?: Signalish<string | undefined>;
	xlinkArcrole?: Signalish<string | undefined>;
	'xlink:href'?: Signalish<string | undefined>;
	xlinkHref?: Signalish<string | undefined>;
	'xlink:role'?: Signalish<string | undefined>;
	xlinkRole?: Signalish<string | undefined>;
	'xlink:show'?: Signalish<string | undefined>;
	xlinkShow?: Signalish<string | undefined>;
	'xlink:title'?: Signalish<string | undefined>;
	xlinkTitle?: Signalish<string | undefined>;
	'xlink:type'?: Signalish<string | undefined>;
	xlinkType?: Signalish<string | undefined>;
	'xml:base'?: Signalish<string | undefined>;
	xmlBase?: Signalish<string | undefined>;
	'xml:lang'?: Signalish<string | undefined>;
	xmlLang?: Signalish<string | undefined>;
	xmlns?: Signalish<string | undefined>;
	xmlnsXlink?: Signalish<string | undefined>;
	'xml:space'?: Signalish<string | undefined>;
	xmlSpace?: Signalish<string | undefined>;
	y1?: Signalish<number | string | undefined>;
	y2?: Signalish<number | string | undefined>;
	y?: Signalish<number | string | undefined>;
	yChannelSelector?: Signalish<string | undefined>;
	z?: Signalish<number | string | undefined>;
	zoomAndPan?: Signalish<string | undefined>;
}

export interface PathAttributes {
	d: string;
}

export type TargetedEvent<
	Target extends EventTarget = EventTarget,
	TypedEvent extends Event = Event
> = Omit<TypedEvent, 'currentTarget'> & {
	readonly currentTarget: Target;
};

export type TargetedAnimationEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	AnimationEvent
>;
export type TargetedClipboardEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	ClipboardEvent
>;
export type TargetedCommandEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	CommandEvent
>;
export type TargetedCompositionEvent<Target extends EventTarget> =
	TargetedEvent<Target, CompositionEvent>;
export type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	DragEvent
>;
export type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	FocusEvent
>;
export type TargetedInputEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	InputEvent
>;
export type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	KeyboardEvent
>;
export type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	MouseEvent
>;
export type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	PointerEvent
>;
export type TargetedSnapEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	SnapEvent
>;
export type TargetedSubmitEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	SubmitEvent
>;
export type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	TouchEvent
>;
export type TargetedToggleEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	ToggleEvent
>;
export type TargetedTransitionEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	TransitionEvent
>;
export type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	UIEvent
>;
export type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<
	Target,
	WheelEvent
>;
export type TargetedPictureInPictureEvent<Target extends EventTarget> =
	TargetedEvent<Target, PictureInPictureEvent>;

export type EventHandler<E extends TargetedEvent> = {
	bivarianceHack(event: E): void;
}['bivarianceHack'];

export type AnimationEventHandler<Target extends EventTarget> = EventHandler<
	TargetedAnimationEvent<Target>
>;
export type ClipboardEventHandler<Target extends EventTarget> = EventHandler<
	TargetedClipboardEvent<Target>
>;
export type CommandEventHandler<Target extends EventTarget> = EventHandler<
	TargetedCommandEvent<Target>
>;
export type CompositionEventHandler<Target extends EventTarget> = EventHandler<
	TargetedCompositionEvent<Target>
>;
export type DragEventHandler<Target extends EventTarget> = EventHandler<
	TargetedDragEvent<Target>
>;
export type ToggleEventHandler<Target extends EventTarget> = EventHandler<
	TargetedToggleEvent<Target>
>;
export type FocusEventHandler<Target extends EventTarget> = EventHandler<
	TargetedFocusEvent<Target>
>;
export type GenericEventHandler<Target extends EventTarget> = EventHandler<
	TargetedEvent<Target>
>;
export type InputEventHandler<Target extends EventTarget> = EventHandler<
	TargetedInputEvent<Target>
>;
export type KeyboardEventHandler<Target extends EventTarget> = EventHandler<
	TargetedKeyboardEvent<Target>
>;
export type MouseEventHandler<Target extends EventTarget> = EventHandler<
	TargetedMouseEvent<Target>
>;
export type PointerEventHandler<Target extends EventTarget> = EventHandler<
	TargetedPointerEvent<Target>
>;
export type SnapEventHandler<Target extends EventTarget> = EventHandler<
	TargetedSnapEvent<Target>
>;
export type SubmitEventHandler<Target extends EventTarget> = EventHandler<
	TargetedSubmitEvent<Target>
>;
export type TouchEventHandler<Target extends EventTarget> = EventHandler<
	TargetedTouchEvent<Target>
>;
export type TransitionEventHandler<Target extends EventTarget> = EventHandler<
	TargetedTransitionEvent<Target>
>;
export type UIEventHandler<Target extends EventTarget> = EventHandler<
	TargetedUIEvent<Target>
>;
export type WheelEventHandler<Target extends EventTarget> = EventHandler<
	TargetedWheelEvent<Target>
>;
export type PictureInPictureEventHandler<Target extends EventTarget> =
	EventHandler<TargetedPictureInPictureEvent<Target>>;

export interface DOMAttributes<
	Target extends EventTarget
> extends PreactDOMAttributes {
	// Image Events
	onLoad?: GenericEventHandler<Target> | undefined;
	onLoadCapture?: GenericEventHandler<Target> | undefined;
	onError?: GenericEventHandler<Target> | undefined;
	onErrorCapture?: GenericEventHandler<Target> | undefined;

	// Clipboard Events
	onCopy?: ClipboardEventHandler<Target> | undefined;
	onCopyCapture?: ClipboardEventHandler<Target> | undefined;
	onCut?: ClipboardEventHandler<Target> | undefined;
	onCutCapture?: ClipboardEventHandler<Target> | undefined;
	onPaste?: ClipboardEventHandler<Target> | undefined;
	onPasteCapture?: ClipboardEventHandler<Target> | undefined;

	// Composition Events
	onCompositionEnd?: CompositionEventHandler<Target> | undefined;
	onCompositionEndCapture?: CompositionEventHandler<Target> | undefined;
	onCompositionStart?: CompositionEventHandler<Target> | undefined;
	onCompositionStartCapture?: CompositionEventHandler<Target> | undefined;
	onCompositionUpdate?: CompositionEventHandler<Target> | undefined;
	onCompositionUpdateCapture?: CompositionEventHandler<Target> | undefined;

	// Popover Events
	onBeforeToggle?: ToggleEventHandler<Target> | undefined;
	onToggle?: ToggleEventHandler<Target> | undefined;

	// Dialog Events
	onClose?: GenericEventHandler<Target> | undefined;
	onCancel?: GenericEventHandler<Target> | undefined;

	// Focus Events
	onFocus?: FocusEventHandler<Target> | undefined;
	onFocusCapture?: FocusEventHandler<Target> | undefined;
	onFocusIn?: FocusEventHandler<Target> | undefined;
	onFocusInCapture?: FocusEventHandler<Target> | undefined;
	onFocusOut?: FocusEventHandler<Target> | undefined;
	onFocusOutCapture?: FocusEventHandler<Target> | undefined;
	onBlur?: FocusEventHandler<Target> | undefined;
	onBlurCapture?: FocusEventHandler<Target> | undefined;

	// Form Events
	onChange?: GenericEventHandler<Target> | undefined;
	onChangeCapture?: GenericEventHandler<Target> | undefined;
	onInput?: InputEventHandler<Target> | undefined;
	onInputCapture?: InputEventHandler<Target> | undefined;
	onBeforeInput?: InputEventHandler<Target> | undefined;
	onBeforeInputCapture?: InputEventHandler<Target> | undefined;
	onSearch?: GenericEventHandler<Target> | undefined;
	onSearchCapture?: GenericEventHandler<Target> | undefined;
	onSubmit?: SubmitEventHandler<Target> | undefined;
	onSubmitCapture?: SubmitEventHandler<Target> | undefined;
	onInvalid?: GenericEventHandler<Target> | undefined;
	onInvalidCapture?: GenericEventHandler<Target> | undefined;
	onReset?: GenericEventHandler<Target> | undefined;
	onResetCapture?: GenericEventHandler<Target> | undefined;
	onFormData?: GenericEventHandler<Target> | undefined;
	onFormDataCapture?: GenericEventHandler<Target> | undefined;

	// Keyboard Events
	onKeyDown?: KeyboardEventHandler<Target> | undefined;
	onKeyDownCapture?: KeyboardEventHandler<Target> | undefined;
	onKeyPress?: KeyboardEventHandler<Target> | undefined;
	onKeyPressCapture?: KeyboardEventHandler<Target> | undefined;
	onKeyUp?: KeyboardEventHandler<Target> | undefined;
	onKeyUpCapture?: KeyboardEventHandler<Target> | undefined;

	// Media Events
	onAbort?: GenericEventHandler<Target> | undefined;
	onAbortCapture?: GenericEventHandler<Target> | undefined;
	onCanPlay?: GenericEventHandler<Target> | undefined;
	onCanPlayCapture?: GenericEventHandler<Target> | undefined;
	onCanPlayThrough?: GenericEventHandler<Target> | undefined;
	onCanPlayThroughCapture?: GenericEventHandler<Target> | undefined;
	onDurationChange?: GenericEventHandler<Target> | undefined;
	onDurationChangeCapture?: GenericEventHandler<Target> | undefined;
	onEmptied?: GenericEventHandler<Target> | undefined;
	onEmptiedCapture?: GenericEventHandler<Target> | undefined;
	onEncrypted?: GenericEventHandler<Target> | undefined;
	onEncryptedCapture?: GenericEventHandler<Target> | undefined;
	onEnded?: GenericEventHandler<Target> | undefined;
	onEndedCapture?: GenericEventHandler<Target> | undefined;
	onLoadedData?: GenericEventHandler<Target> | undefined;
	onLoadedDataCapture?: GenericEventHandler<Target> | undefined;
	onLoadedMetadata?: GenericEventHandler<Target> | undefined;
	onLoadedMetadataCapture?: GenericEventHandler<Target> | undefined;
	onLoadStart?: GenericEventHandler<Target> | undefined;
	onLoadStartCapture?: GenericEventHandler<Target> | undefined;
	onPause?: GenericEventHandler<Target> | undefined;
	onPauseCapture?: GenericEventHandler<Target> | undefined;
	onPlay?: GenericEventHandler<Target> | undefined;
	onPlayCapture?: GenericEventHandler<Target> | undefined;
	onPlaying?: GenericEventHandler<Target> | undefined;
	onPlayingCapture?: GenericEventHandler<Target> | undefined;
	onProgress?: GenericEventHandler<Target> | undefined;
	onProgressCapture?: GenericEventHandler<Target> | undefined;
	onRateChange?: GenericEventHandler<Target> | undefined;
	onRateChangeCapture?: GenericEventHandler<Target> | undefined;
	onSeeked?: GenericEventHandler<Target> | undefined;
	onSeekedCapture?: GenericEventHandler<Target> | undefined;
	onSeeking?: GenericEventHandler<Target> | undefined;
	onSeekingCapture?: GenericEventHandler<Target> | undefined;
	onStalled?: GenericEventHandler<Target> | undefined;
	onStalledCapture?: GenericEventHandler<Target> | undefined;
	onSuspend?: GenericEventHandler<Target> | undefined;
	onSuspendCapture?: GenericEventHandler<Target> | undefined;
	onTimeUpdate?: GenericEventHandler<Target> | undefined;
	onTimeUpdateCapture?: GenericEventHandler<Target> | undefined;
	onVolumeChange?: GenericEventHandler<Target> | undefined;
	onVolumeChangeCapture?: GenericEventHandler<Target> | undefined;
	onWaiting?: GenericEventHandler<Target> | undefined;
	onWaitingCapture?: GenericEventHandler<Target> | undefined;

	// MouseEvents
	onClick?: MouseEventHandler<Target> | undefined;
	onClickCapture?: MouseEventHandler<Target> | undefined;
	onContextMenu?: MouseEventHandler<Target> | undefined;
	onContextMenuCapture?: MouseEventHandler<Target> | undefined;
	onDblClick?: MouseEventHandler<Target> | undefined;
	onDblClickCapture?: MouseEventHandler<Target> | undefined;
	onDrag?: DragEventHandler<Target> | undefined;
	onDragCapture?: DragEventHandler<Target> | undefined;
	onDragEnd?: DragEventHandler<Target> | undefined;
	onDragEndCapture?: DragEventHandler<Target> | undefined;
	onDragEnter?: DragEventHandler<Target> | undefined;
	onDragEnterCapture?: DragEventHandler<Target> | undefined;
	onDragExit?: DragEventHandler<Target> | undefined;
	onDragExitCapture?: DragEventHandler<Target> | undefined;
	onDragLeave?: DragEventHandler<Target> | undefined;
	onDragLeaveCapture?: DragEventHandler<Target> | undefined;
	onDragOver?: DragEventHandler<Target> | undefined;
	onDragOverCapture?: DragEventHandler<Target> | undefined;
	onDragStart?: DragEventHandler<Target> | undefined;
	onDragStartCapture?: DragEventHandler<Target> | undefined;
	onDrop?: DragEventHandler<Target> | undefined;
	onDropCapture?: DragEventHandler<Target> | undefined;
	onMouseDown?: MouseEventHandler<Target> | undefined;
	onMouseDownCapture?: MouseEventHandler<Target> | undefined;
	onMouseEnter?: MouseEventHandler<Target> | undefined;
	onMouseEnterCapture?: MouseEventHandler<Target> | undefined;
	onMouseLeave?: MouseEventHandler<Target> | undefined;
	onMouseLeaveCapture?: MouseEventHandler<Target> | undefined;
	onMouseMove?: MouseEventHandler<Target> | undefined;
	onMouseMoveCapture?: MouseEventHandler<Target> | undefined;
	onMouseOut?: MouseEventHandler<Target> | undefined;
	onMouseOutCapture?: MouseEventHandler<Target> | undefined;
	onMouseOver?: MouseEventHandler<Target> | undefined;
	onMouseOverCapture?: MouseEventHandler<Target> | undefined;
	onMouseUp?: MouseEventHandler<Target> | undefined;
	onMouseUpCapture?: MouseEventHandler<Target> | undefined;
	// TODO: Spec for \`auxclick\` events was changed to make it a PointerEvent but only
	// Chrome has support for it yet. When more browsers align we should change this.
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event#browser_compatibility
	onAuxClick?: MouseEventHandler<Target> | undefined;
	onAuxClickCapture?: MouseEventHandler<Target> | undefined;

	// Selection Events
	onSelect?: GenericEventHandler<Target> | undefined;
	onSelectCapture?: GenericEventHandler<Target> | undefined;

	// Touch Events
	onTouchCancel?: TouchEventHandler<Target> | undefined;
	onTouchCancelCapture?: TouchEventHandler<Target> | undefined;
	onTouchEnd?: TouchEventHandler<Target> | undefined;
	onTouchEndCapture?: TouchEventHandler<Target> | undefined;
	onTouchMove?: TouchEventHandler<Target> | undefined;
	onTouchMoveCapture?: TouchEventHandler<Target> | undefined;
	onTouchStart?: TouchEventHandler<Target> | undefined;
	onTouchStartCapture?: TouchEventHandler<Target> | undefined;

	// Pointer Events
	onPointerOver?: PointerEventHandler<Target> | undefined;
	onPointerOverCapture?: PointerEventHandler<Target> | undefined;
	onPointerEnter?: PointerEventHandler<Target> | undefined;
	onPointerEnterCapture?: PointerEventHandler<Target> | undefined;
	onPointerDown?: PointerEventHandler<Target> | undefined;
	onPointerDownCapture?: PointerEventHandler<Target> | undefined;
	onPointerMove?: PointerEventHandler<Target> | undefined;
	onPointerMoveCapture?: PointerEventHandler<Target> | undefined;
	onPointerUp?: PointerEventHandler<Target> | undefined;
	onPointerUpCapture?: PointerEventHandler<Target> | undefined;
	onPointerCancel?: PointerEventHandler<Target> | undefined;
	onPointerCancelCapture?: PointerEventHandler<Target> | undefined;
	onPointerOut?: PointerEventHandler<Target> | undefined;
	onPointerOutCapture?: PointerEventHandler<Target> | undefined;
	onPointerLeave?: PointerEventHandler<Target> | undefined;
	onPointerLeaveCapture?: PointerEventHandler<Target> | undefined;
	onGotPointerCapture?: PointerEventHandler<Target> | undefined;
	onGotPointerCaptureCapture?: PointerEventHandler<Target> | undefined;
	onLostPointerCapture?: PointerEventHandler<Target> | undefined;
	onLostPointerCaptureCapture?: PointerEventHandler<Target> | undefined;

	// Scroll Events
	onScroll?: GenericEventHandler<Target> | undefined;
	onScrollCapture?: GenericEventHandler<Target> | undefined;
	onScrollEnd?: GenericEventHandler<Target> | undefined;
	onScrollEndCapture?: GenericEventHandler<Target> | undefined;
	onScrollSnapChange?: SnapEventHandler<Target> | undefined;
	onScrollSnapChangeCapture?: SnapEventHandler<Target> | undefined;
	onScrollSnapChanging?: SnapEventHandler<Target> | undefined;
	onScrollSnapChangingCapture?: SnapEventHandler<Target> | undefined;

	// Wheel Events
	onWheel?: WheelEventHandler<Target> | undefined;
	onWheelCapture?: WheelEventHandler<Target> | undefined;

	// Animation Events
	onAnimationStart?: AnimationEventHandler<Target> | undefined;
	onAnimationStartCapture?: AnimationEventHandler<Target> | undefined;
	onAnimationEnd?: AnimationEventHandler<Target> | undefined;
	onAnimationEndCapture?: AnimationEventHandler<Target> | undefined;
	onAnimationIteration?: AnimationEventHandler<Target> | undefined;
	onAnimationIterationCapture?: AnimationEventHandler<Target> | undefined;

	// Transition Events
	onTransitionCancel?: TransitionEventHandler<Target>;
	onTransitionCancelCapture?: TransitionEventHandler<Target>;
	onTransitionEnd?: TransitionEventHandler<Target>;
	onTransitionEndCapture?: TransitionEventHandler<Target>;
	onTransitionRun?: TransitionEventHandler<Target>;
	onTransitionRunCapture?: TransitionEventHandler<Target>;
	onTransitionStart?: TransitionEventHandler<Target>;
	onTransitionStartCapture?: TransitionEventHandler<Target>;

	// PictureInPicture Events
	onEnterPictureInPicture?: PictureInPictureEventHandler<Target>;
	onEnterPictureInPictureCapture?: PictureInPictureEventHandler<Target>;
	onLeavePictureInPicture?: PictureInPictureEventHandler<Target>;
	onLeavePictureInPictureCapture?: PictureInPictureEventHandler<Target>;
	onResize?: PictureInPictureEventHandler<Target>;
	onResizeCapture?: PictureInPictureEventHandler<Target>;

	onCommand?: CommandEventHandler<Target>;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
export interface AriaAttributes {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	'aria-activedescendant'?: Signalish<string | undefined>;
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	'aria-atomic'?: Signalish<Booleanish | undefined>;
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	'aria-autocomplete'?: Signalish<
		'none' | 'inline' | 'list' | 'both' | undefined
	>;
	/**
	 * Defines a string value that labels the current element, which is intended to be converted into Braille.
	 * @see aria-label.
	 */
	'aria-braillelabel'?: Signalish<string | undefined>;
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: Signalish<string | undefined>;
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	'aria-busy'?: Signalish<Booleanish | undefined>;
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed
	 * @see aria-selected.
	 */
	'aria-checked'?: Signalish<Booleanish | 'mixed' | undefined>;
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	'aria-colcount'?: Signalish<number | undefined>;
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount
	 * @see aria-colspan.
	 */
	'aria-colindex'?: Signalish<number | undefined>;
	/**
	 * Defines a human readable text alternative of aria-colindex.
	 * @see aria-rowindextext.
	 */
	'aria-colindextext'?: Signalish<string | undefined>;
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex
	 * @see aria-rowspan.
	 */
	'aria-colspan'?: Signalish<number | undefined>;
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	'aria-controls'?: Signalish<string | undefined>;
	/** Indicates the element that represents the current item within a container or set of related elements. */
	'aria-current'?: Signalish<
		Booleanish | 'page' | 'step' | 'location' | 'date' | 'time' | undefined
	>;
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	'aria-describedby'?: Signalish<string | undefined>;
	/**
	 * Defines a string value that describes or annotates the current element.
	 * @see related aria-describedby.
	 */
	'aria-description'?: Signalish<string | undefined>;
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	'aria-details'?: Signalish<string | undefined>;
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden
	 * @see aria-readonly.
	 */
	'aria-disabled'?: Signalish<Booleanish | undefined>;
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	'aria-dropeffect'?: Signalish<
		'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined
	>;
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid
	 * @see aria-describedby.
	 */
	'aria-errormessage'?: Signalish<string | undefined>;
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	'aria-expanded'?: Signalish<Booleanish | undefined>;
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	'aria-flowto'?: Signalish<string | undefined>;
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 * @deprecated in ARIA 1.1
	 */
	'aria-grabbed'?: Signalish<Booleanish | undefined>;
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	'aria-haspopup'?: Signalish<
		Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
	>;
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	'aria-hidden'?: Signalish<Booleanish | undefined>;
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: Signalish<Booleanish | 'grammar' | 'spelling' | undefined>;
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	'aria-keyshortcuts'?: Signalish<string | undefined>;
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	'aria-label'?: Signalish<string | undefined>;
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: Signalish<string | undefined>;
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: Signalish<number | undefined>;
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	'aria-live'?: Signalish<'off' | 'assertive' | 'polite' | undefined>;
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: Signalish<Booleanish | undefined>;
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: Signalish<Booleanish | undefined>;
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	'aria-multiselectable'?: Signalish<Booleanish | undefined>;
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: Signalish<'horizontal' | 'vertical' | undefined>;
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	'aria-owns'?: Signalish<string | undefined>;
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	'aria-placeholder'?: Signalish<string | undefined>;
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	'aria-posinset'?: Signalish<number | undefined>;
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked
	 * @see aria-selected.
	 */
	'aria-pressed'?: Signalish<Booleanish | 'mixed' | undefined>;
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	'aria-readonly'?: Signalish<Booleanish | undefined>;
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	'aria-relevant'?: Signalish<
		| 'additions'
		| 'additions removals'
		| 'additions text'
		| 'all'
		| 'removals'
		| 'removals additions'
		| 'removals text'
		| 'text'
		| 'text additions'
		| 'text removals'
		| undefined
	>;
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: Signalish<Booleanish | undefined>;
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: Signalish<string | undefined>;
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: Signalish<number | undefined>;
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount
	 * @see aria-rowspan.
	 */
	'aria-rowindex'?: Signalish<number | undefined>;
	/**
	 * Defines a human readable text alternative of aria-rowindex.
	 * @see aria-colindextext.
	 */
	'aria-rowindextext'?: Signalish<string | undefined>;
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex
	 * @see aria-colspan.
	 */
	'aria-rowspan'?: Signalish<number | undefined>;
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked
	 * @see aria-pressed.
	 */
	'aria-selected'?: Signalish<Booleanish | undefined>;
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	'aria-setsize'?: Signalish<number | undefined>;
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: Signalish<
		'none' | 'ascending' | 'descending' | 'other' | undefined
	>;
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: Signalish<number | undefined>;
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: Signalish<number | undefined>;
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: Signalish<number | undefined>;
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: Signalish<string | undefined>;
}

// All the WAI-ARIA 1.2 role attribute values from https://www.w3.org/TR/wai-aria-1.2/#role_definitions
export type WAIAriaRole =
	| 'alert'
	| 'alertdialog'
	| 'application'
	| 'article'
	| 'banner'
	| 'blockquote'
	| 'button'
	| 'caption'
	| 'cell'
	| 'checkbox'
	| 'code'
	| 'columnheader'
	| 'combobox'
	| 'command'
	| 'complementary'
	| 'composite'
	| 'contentinfo'
	| 'definition'
	| 'deletion'
	| 'dialog'
	| 'directory'
	| 'document'
	| 'emphasis'
	| 'feed'
	| 'figure'
	| 'form'
	| 'grid'
	| 'gridcell'
	| 'group'
	| 'heading'
	| 'img'
	| 'input'
	| 'insertion'
	| 'landmark'
	| 'link'
	| 'list'
	| 'listbox'
	| 'listitem'
	| 'log'
	| 'main'
	| 'marquee'
	| 'math'
	| 'meter'
	| 'menu'
	| 'menubar'
	| 'menuitem'
	| 'menuitemcheckbox'
	| 'menuitemradio'
	| 'navigation'
	| 'none'
	| 'note'
	| 'option'
	| 'paragraph'
	| 'presentation'
	| 'progressbar'
	| 'radio'
	| 'radiogroup'
	| 'range'
	| 'region'
	| 'roletype'
	| 'row'
	| 'rowgroup'
	| 'rowheader'
	| 'scrollbar'
	| 'search'
	| 'searchbox'
	| 'section'
	| 'sectionhead'
	| 'select'
	| 'separator'
	| 'slider'
	| 'spinbutton'
	| 'status'
	| 'strong'
	| 'structure'
	| 'subscript'
	| 'superscript'
	| 'switch'
	| 'tab'
	| 'table'
	| 'tablist'
	| 'tabpanel'
	| 'term'
	| 'textbox'
	| 'time'
	| 'timer'
	| 'toolbar'
	| 'tooltip'
	| 'tree'
	| 'treegrid'
	| 'treeitem'
	| 'widget'
	| 'window'
	| 'none presentation';

// All the Digital Publishing WAI-ARIA 1.0 role attribute values from https://www.w3.org/TR/dpub-aria-1.0/#role_definitions
export type DPubAriaRole =
	| 'doc-abstract'
	| 'doc-acknowledgments'
	| 'doc-afterword'
	| 'doc-appendix'
	| 'doc-backlink'
	| 'doc-biblioentry'
	| 'doc-bibliography'
	| 'doc-biblioref'
	| 'doc-chapter'
	| 'doc-colophon'
	| 'doc-conclusion'
	| 'doc-cover'
	| 'doc-credit'
	| 'doc-credits'
	| 'doc-dedication'
	| 'doc-endnote'
	| 'doc-endnotes'
	| 'doc-epigraph'
	| 'doc-epilogue'
	| 'doc-errata'
	| 'doc-example'
	| 'doc-footnote'
	| 'doc-foreword'
	| 'doc-glossary'
	| 'doc-glossref'
	| 'doc-index'
	| 'doc-introduction'
	| 'doc-noteref'
	| 'doc-notice'
	| 'doc-pagebreak'
	| 'doc-pagelist'
	| 'doc-part'
	| 'doc-preface'
	| 'doc-prologue'
	| 'doc-pullquote'
	| 'doc-qna'
	| 'doc-subtitle'
	| 'doc-tip'
	| 'doc-toc';

export type AriaRole = WAIAriaRole | DPubAriaRole;

export interface AllHTMLAttributes<RefType extends EventTarget = EventTarget>
	extends ClassAttributes<RefType>, DOMAttributes<RefType>, AriaAttributes {
	// Standard HTML Attributes
	accept?: Signalish<string | undefined>;
	'accept-charset'?: Signalish<AllHTMLAttributes['acceptCharset']>;
	acceptCharset?: Signalish<string | undefined>;
	accesskey?: Signalish<AllHTMLAttributes['accessKey']>;
	accessKey?: Signalish<string | undefined>;
	action?: Signalish<string | undefined>;
	allow?: Signalish<string | undefined>;
	allowfullscreen?: Signalish<boolean | undefined>;
	allowFullScreen?: Signalish<boolean | undefined>;
	allowtransparency?: Signalish<boolean | undefined>;
	allowTransparency?: Signalish<boolean | undefined>;
	alt?: Signalish<string | undefined>;
	as?: Signalish<string | undefined>;
	async?: Signalish<boolean | undefined>;
	autocomplete?: Signalish<string | undefined>;
	autoComplete?: Signalish<string | undefined>;
	autocorrect?: Signalish<string | undefined>;
	autoCorrect?: Signalish<string | undefined>;
	autofocus?: Signalish<boolean | undefined>;
	autoFocus?: Signalish<boolean | undefined>;
	autoplay?: Signalish<boolean | undefined>;
	autoPlay?: Signalish<boolean | undefined>;
	capture?: Signalish<boolean | string | undefined>;
	cellpadding?: Signalish<number | string | undefined>;
	cellPadding?: Signalish<number | string | undefined>;
	cellspacing?: Signalish<number | string | undefined>;
	cellSpacing?: Signalish<number | string | undefined>;
	charset?: Signalish<string | undefined>;
	charSet?: Signalish<string | undefined>;
	challenge?: Signalish<string | undefined>;
	checked?: Signalish<boolean | undefined>;
	cite?: Signalish<string | undefined>;
	class?: Signalish<string | undefined>;
	className?: Signalish<string | undefined>;
	cols?: Signalish<number | undefined>;
	colspan?: Signalish<number | undefined>;
	colSpan?: Signalish<number | undefined>;
	command?: Signalish<string | undefined>;
	commandfor?: Signalish<string | undefined>;
	commandFor?: Signalish<string | undefined>;
	content?: Signalish<string | undefined>;
	contenteditable?: Signalish<AllHTMLAttributes['contentEditable']>;
	contentEditable?: Signalish<
		Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
	>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
	contextmenu?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
	contextMenu?: Signalish<string | undefined>;
	controls?: Signalish<boolean | undefined>;
	controlslist?: Signalish<string | undefined>;
	controlsList?: Signalish<string | undefined>;
	coords?: Signalish<string | undefined>;
	crossorigin?: Signalish<string | undefined>;
	crossOrigin?: Signalish<string | undefined>;
	currentTime?: Signalish<number | undefined>;
	data?: Signalish<string | undefined>;
	datetime?: Signalish<string | undefined>;
	dateTime?: Signalish<string | undefined>;
	default?: Signalish<boolean | undefined>;
	defaultChecked?: Signalish<boolean | undefined>;
	defaultMuted?: Signalish<boolean | undefined>;
	defaultPlaybackRate?: Signalish<number | undefined>;
	defaultValue?: Signalish<string | undefined>;
	defer?: Signalish<boolean | undefined>;
	dir?: Signalish<'auto' | 'rtl' | 'ltr' | undefined>;
	disabled?: Signalish<boolean | undefined>;
	disableremoteplayback?: Signalish<boolean | undefined>;
	disableRemotePlayback?: Signalish<boolean | undefined>;
	download?: Signalish<any | undefined>;
	decoding?: Signalish<'sync' | 'async' | 'auto' | undefined>;
	draggable?: Signalish<boolean | undefined>;
	enctype?: Signalish<string | undefined>;
	encType?: Signalish<string | undefined>;
	enterkeyhint?: Signalish<
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send'
		| undefined
	>;
	elementtiming?: Signalish<AllHTMLAttributes['elementTiming']>;
	elementTiming?: Signalish<string | undefined>;
	exportparts?: Signalish<string | undefined>;
	for?: Signalish<string | undefined>;
	form?: Signalish<string | undefined>;
	formaction?: Signalish<string | undefined>;
	formAction?: Signalish<string | undefined>;
	formenctype?: Signalish<string | undefined>;
	formEncType?: Signalish<string | undefined>;
	formmethod?: Signalish<string | undefined>;
	formMethod?: Signalish<string | undefined>;
	formnovalidate?: Signalish<boolean | undefined>;
	formNoValidate?: Signalish<boolean | undefined>;
	formtarget?: Signalish<string | undefined>;
	formTarget?: Signalish<string | undefined>;
	frameborder?: Signalish<number | string | undefined>;
	frameBorder?: Signalish<number | string | undefined>;
	headers?: Signalish<string | undefined>;
	height?: Signalish<number | string | undefined>;
	hidden?: Signalish<boolean | 'hidden' | 'until-found' | undefined>;
	high?: Signalish<number | undefined>;
	href?: Signalish<string | undefined>;
	hreflang?: Signalish<string | undefined>;
	hrefLang?: Signalish<string | undefined>;
	htmlFor?: Signalish<string | undefined>;
	'http-equiv'?: Signalish<string | undefined>;
	httpEquiv?: Signalish<string | undefined>;
	icon?: Signalish<string | undefined>;
	id?: Signalish<string | undefined>;
	indeterminate?: Signalish<boolean | undefined>;
	inert?: Signalish<boolean | undefined>;
	inputmode?: Signalish<string | undefined>;
	inputMode?: Signalish<string | undefined>;
	integrity?: Signalish<string | undefined>;
	is?: Signalish<string | undefined>;
	keyparams?: Signalish<string | undefined>;
	keyParams?: Signalish<string | undefined>;
	keytype?: Signalish<string | undefined>;
	keyType?: Signalish<string | undefined>;
	kind?: Signalish<string | undefined>;
	label?: Signalish<string | undefined>;
	lang?: Signalish<string | undefined>;
	list?: Signalish<string | undefined>;
	loading?: Signalish<'eager' | 'lazy' | undefined>;
	loop?: Signalish<boolean | undefined>;
	low?: Signalish<number | undefined>;
	manifest?: Signalish<string | undefined>;
	marginheight?: Signalish<number | undefined>;
	marginHeight?: Signalish<number | undefined>;
	marginwidth?: Signalish<number | undefined>;
	marginWidth?: Signalish<number | undefined>;
	max?: Signalish<number | string | undefined>;
	maxlength?: Signalish<number | undefined>;
	maxLength?: Signalish<number | undefined>;
	media?: Signalish<string | undefined>;
	mediaGroup?: Signalish<string | undefined>;
	method?: Signalish<string | undefined>;
	min?: Signalish<number | string | undefined>;
	minlength?: Signalish<number | undefined>;
	minLength?: Signalish<number | undefined>;
	multiple?: Signalish<boolean | undefined>;
	muted?: Signalish<boolean | undefined>;
	name?: Signalish<string | undefined>;
	nomodule?: Signalish<boolean | undefined>;
	nonce?: Signalish<string | undefined>;
	novalidate?: Signalish<boolean | undefined>;
	noValidate?: Signalish<boolean | undefined>;
	open?: Signalish<boolean | undefined>;
	optimum?: Signalish<number | undefined>;
	part?: Signalish<string | undefined>;
	pattern?: Signalish<string | undefined>;
	ping?: Signalish<string | undefined>;
	placeholder?: Signalish<string | undefined>;
	playsinline?: Signalish<boolean | undefined>;
	playsInline?: Signalish<boolean | undefined>;
	playbackRate?: Signalish<number | undefined>;
	popover?: Signalish<'auto' | 'hint' | 'manual' | boolean | undefined>;
	popovertarget?: Signalish<string | undefined>;
	popoverTarget?: Signalish<string | undefined>;
	popovertargetaction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
	popoverTargetAction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
	poster?: Signalish<string | undefined>;
	preload?: Signalish<'auto' | 'metadata' | 'none' | undefined>;
	preservesPitch?: Signalish<boolean | undefined>;
	radioGroup?: Signalish<string | undefined>;
	readonly?: Signalish<boolean | undefined>;
	readOnly?: Signalish<boolean | undefined>;
	referrerpolicy?: Signalish<
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url'
		| undefined
	>;
	rel?: Signalish<string | undefined>;
	required?: Signalish<boolean | undefined>;
	reversed?: Signalish<boolean | undefined>;
	role?: Signalish<AriaRole | undefined>;
	rows?: Signalish<number | undefined>;
	rowspan?: Signalish<number | undefined>;
	rowSpan?: Signalish<number | undefined>;
	sandbox?: Signalish<string | undefined>;
	scope?: Signalish<string | undefined>;
	scoped?: Signalish<boolean | undefined>;
	scrolling?: Signalish<string | undefined>;
	seamless?: Signalish<boolean | undefined>;
	selected?: Signalish<boolean | undefined>;
	shape?: Signalish<string | undefined>;
	size?: Signalish<number | undefined>;
	sizes?: Signalish<string | undefined>;
	slot?: Signalish<string | undefined>;
	span?: Signalish<number | undefined>;
	spellcheck?: Signalish<boolean | undefined>;
	src?: Signalish<string | undefined>;
	srcdoc?: Signalish<string | undefined>;
	srcDoc?: Signalish<string | undefined>;
	srclang?: Signalish<string | undefined>;
	srcLang?: Signalish<string | undefined>;
	srcset?: Signalish<string | undefined>;
	srcSet?: Signalish<string | undefined>;
	srcObject?: Signalish<MediaStream | MediaSource | Blob | File | null>;
	start?: Signalish<number | undefined>;
	step?: Signalish<number | string | undefined>;
	style?: Signalish<string | CSSProperties | undefined>;
	summary?: Signalish<string | undefined>;
	tabindex?: Signalish<number | undefined>;
	tabIndex?: Signalish<number | undefined>;
	target?: Signalish<string | undefined>;
	title?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
	usemap?: Signalish<string | undefined>;
	useMap?: Signalish<string | undefined>;
	value?: Signalish<string | string[] | number | undefined>;
	volume?: Signalish<string | number | undefined>;
	width?: Signalish<number | string | undefined>;
	wmode?: Signalish<string | undefined>;
	wrap?: Signalish<string | undefined>;

	// Non-standard Attributes
	autocapitalize?: Signalish<
		'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
	>;
	autoCapitalize?: Signalish<
		'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
	>;
	disablePictureInPicture?: Signalish<boolean | undefined>;
	results?: Signalish<number | undefined>;
	translate?: Signalish<boolean | undefined>;

	// RDFa Attributes
	about?: Signalish<string | undefined>;
	datatype?: Signalish<string | undefined>;
	inlist?: Signalish<any>;
	prefix?: Signalish<string | undefined>;
	property?: Signalish<string | undefined>;
	resource?: Signalish<string | undefined>;
	typeof?: Signalish<string | undefined>;
	vocab?: Signalish<string | undefined>;

	// Microdata Attributes
	itemprop?: Signalish<string | undefined>;
	itemProp?: Signalish<string | undefined>;
	itemscope?: Signalish<boolean | undefined>;
	itemScope?: Signalish<boolean | undefined>;
	itemtype?: Signalish<string | undefined>;
	itemType?: Signalish<string | undefined>;
	itemid?: Signalish<string | undefined>;
	itemID?: Signalish<string | undefined>;
	itemref?: Signalish<string | undefined>;
	itemRef?: Signalish<string | undefined>;
}

export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
	extends ClassAttributes<RefType>, DOMAttributes<RefType>, AriaAttributes {
	// Standard HTML Attributes
	accesskey?: Signalish<string | undefined>;
	accessKey?: Signalish<string | undefined>;
	autocapitalize?: Signalish<
		'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
	>;
	autoCapitalize?: Signalish<
		'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
	>;
	autocorrect?: Signalish<string | undefined>;
	autoCorrect?: Signalish<string | undefined>;
	autofocus?: Signalish<boolean | undefined>;
	autoFocus?: Signalish<boolean | undefined>;
	class?: Signalish<string | undefined>;
	className?: Signalish<string | undefined>;
	contenteditable?: Signalish<
		Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
	>;
	contentEditable?: Signalish<
		Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
	>;
	dir?: Signalish<'auto' | 'rtl' | 'ltr' | undefined>;
	draggable?: Signalish<boolean | undefined>;
	enterkeyhint?: Signalish<
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send'
		| undefined
	>;
	exportparts?: Signalish<string | undefined>;
	hidden?: Signalish<boolean | 'hidden' | 'until-found' | undefined>;
	id?: Signalish<string | undefined>;
	inert?: Signalish<boolean | undefined>;
	inputmode?: Signalish<string | undefined>;
	inputMode?: Signalish<string | undefined>;
	is?: Signalish<string | undefined>;
	lang?: Signalish<string | undefined>;
	nonce?: Signalish<string | undefined>;
	part?: Signalish<string | undefined>;
	popover?: Signalish<'auto' | 'hint' | 'manual' | boolean | undefined>;
	slot?: Signalish<string | undefined>;
	spellcheck?: Signalish<boolean | undefined>;
	style?: Signalish<string | CSSProperties | undefined>;
	tabindex?: Signalish<number | undefined>;
	tabIndex?: Signalish<number | undefined>;
	title?: Signalish<string | undefined>;
	translate?: Signalish<boolean | undefined>;

	// WAI-ARIA Attributes
	// Most elements only allow a subset of roles and so this
	// is overwritten in many of the per-element interfaces below
	role?: Signalish<AriaRole | undefined>;

	// Non-standard Attributes
	disablepictureinpicture?: Signalish<boolean | undefined>;
	disablePictureInPicture?: Signalish<boolean | undefined>;
	elementtiming?: Signalish<string | undefined>;
	elementTiming?: Signalish<string | undefined>;
	results?: Signalish<number | undefined>;

	// RDFa Attributes
	about?: Signalish<string | undefined>;
	datatype?: Signalish<string | undefined>;
	inlist?: Signalish<any>;
	prefix?: Signalish<string | undefined>;
	property?: Signalish<string | undefined>;
	resource?: Signalish<string | undefined>;
	typeof?: Signalish<string | undefined>;
	vocab?: Signalish<string | undefined>;

	// Microdata Attributes
	itemid?: Signalish<string | undefined>;
	itemID?: Signalish<string | undefined>;
	itemprop?: Signalish<string | undefined>;
	itemProp?: Signalish<string | undefined>;
	itemref?: Signalish<string | undefined>;
	itemRef?: Signalish<string | undefined>;
	itemscope?: Signalish<boolean | undefined>;
	itemScope?: Signalish<boolean | undefined>;
	itemtype?: Signalish<string | undefined>;
	itemType?: Signalish<string | undefined>;
}

export type HTMLAttributeReferrerPolicy =
	| ''
	| 'no-referrer'
	| 'no-referrer-when-downgrade'
	| 'origin'
	| 'origin-when-cross-origin'
	| 'same-origin'
	| 'strict-origin'
	| 'strict-origin-when-cross-origin'
	| 'unsafe-url';

export type HTMLAttributeAnchorTarget =
	| '_self'
	| '_blank'
	| '_parent'
	| '_top'
	| (string & {});

export interface PartialAnchorHTMLAttributes<
	T extends EventTarget
> extends HTMLAttributes<T> {
	download?: Signalish<any>;
	hreflang?: Signalish<string | undefined>;
	hrefLang?: Signalish<string | undefined>;
	media?: Signalish<string | undefined>;
	ping?: Signalish<string | undefined>;
	rel?: Signalish<string | undefined>;
	target?: Signalish<HTMLAttributeAnchorTarget | undefined>;
	type?: Signalish<string | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
}

export type AnchorAriaRoles =
	| {
			href: Signalish<string>;
			role?: Signalish<
				| 'link'
				| 'button'
				| 'checkbox'
				| 'menuitem'
				| 'menuitemcheckbox'
				| 'menuitemradio'
				| 'option'
				| 'radio'
				| 'switch'
				| 'tab'
				| 'treeitem'
				| 'doc-backlink'
				| 'doc-biblioref'
				| 'doc-glossref'
				| 'doc-noteref'
				| undefined
			>;
	  }
	| {
			href?: never;
			role?: Signalish<AriaRole | undefined>;
	  };

export type AnchorHTMLAttributes<T extends EventTarget = HTMLAnchorElement> =
	Omit<PartialAnchorHTMLAttributes<T>, 'role'> & AnchorAriaRoles;

export interface LooseAnchorHTMLAttributes<
	T extends EventTarget = HTMLAnchorElement
> extends PartialAnchorHTMLAttributes<T> {
	href?: Signalish<string | undefined>;
	role?: Signalish<AriaRole | undefined>;
}

export interface PartialAreaHTMLAttributes<
	T extends EventTarget
> extends HTMLAttributes<T> {
	alt?: Signalish<string | undefined>;
	coords?: Signalish<string | undefined>;
	download?: Signalish<any>;
	hreflang?: Signalish<string | undefined>;
	hrefLang?: Signalish<string | undefined>;
	media?: Signalish<string | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	rel?: Signalish<string | undefined>;
	shape?: Signalish<string | undefined>;
	target?: Signalish<HTMLAttributeAnchorTarget | undefined>;
}

export type AreaAriaRoles =
	| {
			href: Signalish<string>;
			role?: Signalish<'link' | undefined>;
	  }
	| {
			href?: never;
			role?: Signalish<'button' | 'link' | undefined>;
	  };

export type AreaHTMLAttributes<T extends EventTarget = HTMLAreaElement> = Omit<
	PartialAreaHTMLAttributes<T>,
	'role'
> &
	AreaAriaRoles;

export interface LooseAreaHTMLAttributes<
	T extends EventTarget = HTMLAreaElement
> extends PartialAreaHTMLAttributes<T> {
	href?: Signalish<string | undefined>;
	role?: Signalish<'button' | 'link' | undefined>;
}

export interface ArticleHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		| 'article'
		| 'application'
		| 'document'
		| 'feed'
		| 'main'
		| 'none'
		| 'presentation'
		| 'region'
		| undefined
	>;
}

export interface AsideHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		| 'complementary'
		| 'feed'
		| 'none'
		| 'note'
		| 'presentation'
		| 'region'
		| 'search'
		| 'doc-dedication'
		| 'doc-example'
		| 'doc-footnote'
		| 'doc-glossary'
		| 'doc-pullquote'
		| 'doc-tip'
		| undefined
	>;
}

export interface AudioHTMLAttributes<
	T extends EventTarget = HTMLAudioElement
> extends MediaHTMLAttributes<T> {
	role?: Signalish<'application' | undefined>;
}

export interface BaseHTMLAttributes<
	T extends EventTarget = HTMLBaseElement
> extends HTMLAttributes<T> {
	href?: Signalish<string | undefined>;
	role?: never;
	target?: Signalish<HTMLAttributeAnchorTarget | undefined>;
}

export interface BlockquoteHTMLAttributes<
	T extends EventTarget = HTMLQuoteElement
> extends HTMLAttributes<T> {
	cite?: Signalish<string | undefined>;
}

export interface BrHTMLAttributes<
	T extends EventTarget = HTMLBRElement
> extends HTMLAttributes<T> {
	role?: Signalish<'none' | 'presentation' | undefined>;
}

export interface ButtonHTMLAttributes<
	T extends EventTarget = HTMLButtonElement
> extends HTMLAttributes<T> {
	command?: Signalish<string | undefined>;
	commandfor?: Signalish<string | undefined>;
	commandFor?: Signalish<string | undefined>;
	disabled?: Signalish<boolean | undefined>;
	form?: Signalish<string | undefined>;
	formaction?: Signalish<string | undefined>;
	formAction?: Signalish<string | undefined>;
	formenctype?: Signalish<string | undefined>;
	formEncType?: Signalish<string | undefined>;
	formmethod?: Signalish<string | undefined>;
	formMethod?: Signalish<string | undefined>;
	formnovalidate?: Signalish<boolean | undefined>;
	formNoValidate?: Signalish<boolean | undefined>;
	formtarget?: Signalish<string | undefined>;
	formTarget?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
	popovertarget?: Signalish<string | undefined>;
	popoverTarget?: Signalish<string | undefined>;
	popovertargetaction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
	popoverTargetAction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
	role?: Signalish<
		| 'button'
		| 'checkbox'
		| 'combobox'
		| 'gridcell'
		| 'link'
		| 'menuitem'
		| 'menuitemcheckbox'
		| 'menuitemradio'
		| 'option'
		| 'radio'
		| 'separator'
		| 'slider'
		| 'switch'
		| 'tab'
		| 'treeitem'
		| undefined
	>;
	type?: Signalish<'submit' | 'reset' | 'button' | undefined>;
	value?: Signalish<string | number | undefined>;
}

export interface CanvasHTMLAttributes<
	T extends EventTarget = HTMLCanvasElement
> extends HTMLAttributes<T> {
	height?: Signalish<number | string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface CaptionHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: 'caption';
}

export interface ColHTMLAttributes<
	T extends EventTarget = HTMLTableColElement
> extends HTMLAttributes<T> {
	role?: never;
	span?: Signalish<number | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface ColgroupHTMLAttributes<
	T extends EventTarget = HTMLTableColElement
> extends HTMLAttributes<T> {
	role?: never;
	span?: Signalish<number | undefined>;
}

export interface DataHTMLAttributes<
	T extends EventTarget = HTMLDataElement
> extends HTMLAttributes<T> {
	value?: Signalish<string | number | undefined>;
}

export interface DataListHTMLAttributes<
	T extends EventTarget = HTMLDataListElement
> extends HTMLAttributes<T> {
	role?: Signalish<'listbox' | undefined>;
}

export interface DdHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface DelHTMLAttributes<
	T extends EventTarget = HTMLModElement
> extends HTMLAttributes<T> {
	cite?: Signalish<string | undefined>;
	datetime?: Signalish<string | undefined>;
	dateTime?: Signalish<string | undefined>;
}

export interface DetailsHTMLAttributes<
	T extends EventTarget = HTMLDetailsElement
> extends HTMLAttributes<T> {
	name?: Signalish<string | undefined>;
	open?: Signalish<boolean | undefined>;
	role?: Signalish<'group' | undefined>;
}

export interface DialogHTMLAttributes<
	T extends EventTarget = HTMLDialogElement
> extends HTMLAttributes<T> {
	onCancel?: GenericEventHandler<T> | undefined;
	onClose?: GenericEventHandler<T> | undefined;
	open?: Signalish<boolean | undefined>;
	closedby?: Signalish<'none' | 'closerequest' | 'any' | undefined>;
	closedBy?: Signalish<'none' | 'closerequest' | 'any' | undefined>;
	role?: Signalish<'dialog' | 'alertdialog' | undefined>;
}

export interface DlHTMLAttributes<
	T extends EventTarget = HTMLDListElement
> extends HTMLAttributes<T> {
	role?: Signalish<'group' | 'list' | 'none' | 'presentation' | undefined>;
}

export interface DtHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<'listitem' | undefined>;
}

export interface EmbedHTMLAttributes<
	T extends EventTarget = HTMLEmbedElement
> extends HTMLAttributes<T> {
	height?: Signalish<number | string | undefined>;
	role?: Signalish<
		'application' | 'document' | 'img' | 'none' | 'presentation' | undefined
	>;
	src?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface FieldsetHTMLAttributes<
	T extends EventTarget = HTMLFieldSetElement
> extends HTMLAttributes<T> {
	disabled?: Signalish<boolean | undefined>;
	form?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
	role?: Signalish<
		'group' | 'none' | 'presentation' | 'radiogroup' | undefined
	>;
}

export interface FigcaptionHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<'group' | 'none' | 'presentation' | undefined>;
}

export interface FooterHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		| 'contentinfo'
		| 'group'
		| 'none'
		| 'presentation'
		| 'doc-footnote'
		| undefined
	>;
}

export interface FormHTMLAttributes<
	T extends EventTarget = HTMLFormElement
> extends HTMLAttributes<T> {
	'accept-charset'?: Signalish<string | undefined>;
	acceptCharset?: Signalish<string | undefined>;
	action?: Signalish<string | undefined>;
	autocomplete?: Signalish<string | undefined>;
	autoComplete?: Signalish<string | undefined>;
	enctype?: Signalish<string | undefined>;
	encType?: Signalish<string | undefined>;
	method?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
	novalidate?: Signalish<boolean | undefined>;
	noValidate?: Signalish<boolean | undefined>;
	rel?: Signalish<string | undefined>;
	role?: Signalish<'form' | 'none' | 'presentation' | 'search' | undefined>;
	target?: Signalish<string | undefined>;
}

export interface HeadingHTMLAttributes<
	T extends EventTarget = HTMLHeadingElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		'heading' | 'none' | 'presentation' | 'tab' | 'doc-subtitle' | undefined
	>;
}

export interface HeadHTMLAttributes<
	T extends EventTarget = HTMLHeadElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface HeaderHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<'banner' | 'group' | 'none' | 'presentation' | undefined>;
}

export interface HrHTMLAttributes<
	T extends EventTarget = HTMLHRElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		'separator' | 'none' | 'presentation' | 'doc-pagebreak' | undefined
	>;
}

export interface HtmlHTMLAttributes<
	T extends EventTarget = HTMLHtmlElement
> extends HTMLAttributes<T> {
	role?: Signalish<'document' | undefined>;
}

export interface IframeHTMLAttributes<
	T extends EventTarget = HTMLIFrameElement
> extends HTMLAttributes<T> {
	allow?: Signalish<string | undefined>;
	allowfullscreen?: Signalish<boolean | undefined>;
	allowFullScreen?: Signalish<boolean | undefined>;
	allowtransparency?: Signalish<boolean | undefined>;
	allowTransparency?: Signalish<boolean | undefined>;
	/** @deprecated */
	frameborder?: Signalish<number | string | undefined>;
	/** @deprecated */
	frameBorder?: Signalish<number | string | undefined>;
	height?: Signalish<number | string | undefined>;
	loading?: Signalish<'eager' | 'lazy' | undefined>;
	/** @deprecated */
	marginheight?: Signalish<number | undefined>;
	/** @deprecated */
	marginHeight?: Signalish<number | undefined>;
	/** @deprecated */
	marginwidth?: Signalish<number | undefined>;
	/** @deprecated */
	marginWidth?: Signalish<number | undefined>;
	name?: Signalish<string | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	role?: Signalish<
		'application' | 'document' | 'img' | 'none' | 'presentation' | undefined
	>;
	sandbox?: Signalish<string | undefined>;
	/** @deprecated */
	scrolling?: Signalish<string | undefined>;
	seamless?: Signalish<boolean | undefined>;
	src?: Signalish<string | undefined>;
	srcdoc?: Signalish<string | undefined>;
	srcDoc?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export type HTMLAttributeCrossOrigin = 'anonymous' | 'use-credentials';

export interface PartialImgHTMLAttributes<
	T extends EventTarget
> extends HTMLAttributes<T> {
	crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
	crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
	decoding?: Signalish<'async' | 'auto' | 'sync' | undefined>;
	fetchpriority?: Signalish<'high' | 'auto' | 'low' | undefined>;
	fetchPriority?: Signalish<'high' | 'auto' | 'low' | undefined>;
	height?: Signalish<number | string | undefined>;
	loading?: Signalish<'eager' | 'lazy' | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	sizes?: Signalish<string | undefined>;
	src?: Signalish<string | undefined>;
	srcset?: Signalish<string | undefined>;
	srcSet?: Signalish<string | undefined>;
	usemap?: Signalish<string | undefined>;
	useMap?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export type ImgAriaRolesAccessibleName = Signalish<
	| 'img'
	| 'button'
	| 'checkbox'
	| 'link'
	| 'menuitem'
	| 'menuitemcheckbox'
	| 'menuitemradio'
	| 'meter'
	| 'option'
	| 'progressbar'
	| 'radio'
	| 'scrollbar'
	| 'separator'
	| 'slider'
	| 'switch'
	| 'tab'
	| 'treeitem'
	| 'doc-cover'
	| undefined
>;

export type ImgAriaRoles =
	| {
			'aria-label': Signalish<string>;
			role?: ImgAriaRolesAccessibleName;
	  }
	| {
			'aria-labelledby': Signalish<string>;
			role?: ImgAriaRolesAccessibleName;
	  }
	| {
			alt: Signalish<string>;
			role?: ImgAriaRolesAccessibleName;
	  }
	| {
			title: Signalish<string>;
			role?: ImgAriaRolesAccessibleName;
	  }
	| {
			'aria-label'?: never;
			'aria-labelledby'?: never;
			alt?: never;
			title?: never;
			role?: Signalish<'img' | 'none' | 'presentation' | undefined>;
	  };

export type ImgHTMLAttributes<T extends EventTarget = HTMLImageElement> = Omit<
	PartialImgHTMLAttributes<T>,
	'role' | 'aria-label' | 'aria-labelledby' | 'title'
> &
	ImgAriaRoles;

export interface LooseImgHTMLAttributes<
	T extends EventTarget = HTMLImageElement
> extends PartialImgHTMLAttributes<T> {
	alt?: Signalish<string | undefined>;
	'aria-label'?: Signalish<string | undefined>;
	'aria-labelledby'?: Signalish<string | undefined>;
	href?: Signalish<string | undefined>;
	role?:
		| ImgAriaRolesAccessibleName
		| Signalish<'img' | 'none' | 'presentation' | undefined>;
	title?: Signalish<string | undefined>;
}

export type HTMLInputTypeAttribute =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

export interface PartialInputHTMLAttributes<
	T extends EventTarget
> extends HTMLAttributes<T> {
	accept?: Signalish<string | undefined>;
	alt?: Signalish<string | undefined>;
	autocomplete?: Signalish<string | undefined>;
	autoComplete?: Signalish<string | undefined>;
	capture?: Signalish<'user' | 'environment' | undefined>; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
	checked?: Signalish<boolean | undefined>;
	defaultChecked?: Signalish<boolean | undefined>;
	defaultValue?: Signalish<string | number | undefined>;
	disabled?: Signalish<boolean | undefined>;
	enterKeyHint?: Signalish<
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send'
		| undefined
	>;
	form?: Signalish<string | undefined>;
	formaction?: Signalish<string | undefined>;
	formAction?: Signalish<string | undefined>;
	formenctype?: Signalish<string | undefined>;
	formEncType?: Signalish<string | undefined>;
	formmethod?: Signalish<string | undefined>;
	formMethod?: Signalish<string | undefined>;
	formnovalidate?: Signalish<boolean | undefined>;
	formNoValidate?: Signalish<boolean | undefined>;
	formtarget?: Signalish<string | undefined>;
	formTarget?: Signalish<string | undefined>;
	height?: Signalish<number | string | undefined>;
	indeterminate?: Signalish<boolean | undefined>;
	max?: Signalish<number | string | undefined>;
	maxlength?: Signalish<number | undefined>;
	maxLength?: Signalish<number | undefined>;
	min?: Signalish<number | string | undefined>;
	minlength?: Signalish<number | undefined>;
	minLength?: Signalish<number | undefined>;
	multiple?: Signalish<boolean | undefined>;
	name?: Signalish<string | undefined>;
	pattern?: Signalish<string | undefined>;
	placeholder?: Signalish<string | undefined>;
	readonly?: Signalish<boolean | undefined>;
	readOnly?: Signalish<boolean | undefined>;
	required?: Signalish<boolean | undefined>;
	size?: Signalish<number | undefined>;
	src?: Signalish<string | undefined>;
	step?: Signalish<number | string | undefined>;
	type?: Signalish<HTMLInputTypeAttribute | undefined>;
	value?: Signalish<string | number | undefined>;
	width?: Signalish<number | string | undefined>;
	onChange?: GenericEventHandler<T> | undefined;
}

type WithSignalType<U> = U extends { type?: infer V }
	? U | (Omit<U, 'type'> & { type: SignalLike<Exclude<V, undefined>> })
	: never;

export type InputAriaRoles = WithSignalType<
	| {
			type: 'button';
			role?: Signalish<
				| 'button'
				| 'checkbox'
				| 'combobox'
				| 'gridcell'
				| 'link'
				| 'menuitem'
				| 'menuitemcheckbox'
				| 'menuitemradio'
				| 'option'
				| 'radio'
				| 'separator'
				| 'slider'
				| 'switch'
				| 'tab'
				| 'treeitem'
				| undefined
			>;
	  }
	| {
			type: 'checkbox';
			role?: Signalish<
				| 'checkbox'
				| 'button'
				| 'menuitemcheckbox'
				| 'option'
				| 'switch'
				| undefined
			>;
	  }
	| {
			type: 'email';
			list?: never;
			role?: Signalish<'textbox' | undefined>;
	  }
	| {
			type: 'image';
			role?: Signalish<
				| 'button'
				| 'checkbox'
				| 'gridcell'
				| 'link'
				| 'menuitem'
				| 'menuitemcheckbox'
				| 'menuitemradio'
				| 'option'
				| 'separator'
				| 'slider'
				| 'switch'
				| 'tab'
				| 'treeitem'
				| undefined
			>;
	  }
	| {
			type: 'number';
			list?: Signalish<string | undefined>;
			role?: Signalish<'spinbutton' | undefined>;
	  }
	| {
			type: 'radio';
			role?: Signalish<'radio' | 'menuitemradio' | undefined>;
	  }
	| {
			type: 'range';
			list?: Signalish<string | undefined>;
			role?: Signalish<'slider' | undefined>;
	  }
	| {
			type: 'reset';
			role?: Signalish<
				| 'button'
				| 'checkbox'
				| 'combobox'
				| 'gridcell'
				| 'link'
				| 'menuitem'
				| 'menuitemcheckbox'
				| 'menuitemradio'
				| 'option'
				| 'radio'
				| 'separator'
				| 'slider'
				| 'switch'
				| 'tab'
				| 'treeitem'
				| undefined
			>;
	  }
	| {
			type: 'search';
			list?: never;
			role?: Signalish<'searchbox' | undefined>;
	  }
	| {
			type: 'submit';
			role?: Signalish<
				| 'button'
				| 'checkbox'
				| 'combobox'
				| 'gridcell'
				| 'link'
				| 'menuitem'
				| 'menuitemcheckbox'
				| 'menuitemradio'
				| 'option'
				| 'radio'
				| 'separator'
				| 'slider'
				| 'switch'
				| 'tab'
				| 'treeitem'
				| undefined
			>;
	  }
	| {
			type: 'tel';
			list?: never;
			role?: Signalish<'textbox' | undefined>;
	  }
	| {
			type?: 'text';
			list?: never;
			role?: Signalish<
				'textbox' | 'combobox' | 'searchbox' | 'spinbutton' | undefined
			>;
	  }
	| {
			type?: 'text' | 'search' | 'tel' | 'url' | 'email';
			list: Signalish<string | undefined>;
			role?: Signalish<'combobox' | undefined>;
	  }
	| {
			type: 'url';
			list?: never;
			role?: Signalish<'textbox' | undefined>;
	  }
	| {
			type: 'color' | 'date' | 'datetime-local' | 'month' | 'time' | 'week';
			list?: Signalish<string | undefined>;
			role?: never;
	  }
	| {
			type: 'file' | 'hidden' | 'password';
			role?: never;
	  }
>;

export type InputHTMLAttributes<T extends EventTarget = HTMLInputElement> =
	Omit<PartialInputHTMLAttributes<T>, 'role' | 'type'> & InputAriaRoles;

export interface LooseInputHTMLAttributes<
	T extends EventTarget = HTMLInputElement
> extends PartialInputHTMLAttributes<T> {
	type?: Signalish<HTMLInputTypeAttribute | undefined>;
	role?: Signalish<
		| 'button'
		| 'checkbox'
		| 'combobox'
		| 'gridcell'
		| 'link'
		| 'menuitem'
		| 'menuitemcheckbox'
		| 'menuitemradio'
		| 'option'
		| 'radio'
		| 'searchbox'
		| 'separator'
		| 'slider'
		| 'spinbutton'
		| 'switch'
		| 'tab'
		| 'textbox'
		| 'treeitem'
		| undefined
	>;
}

export interface InsHTMLAttributes<
	T extends EventTarget = HTMLModElement
> extends HTMLAttributes<T> {
	cite?: Signalish<string | undefined>;
	datetime?: Signalish<string | undefined>;
	dateTime?: Signalish<string | undefined>;
}

export interface KeygenHTMLAttributes<
	T extends EventTarget = HTMLUnknownElement
> extends HTMLAttributes<T> {
	challenge?: Signalish<string | undefined>;
	disabled?: Signalish<boolean | undefined>;
	form?: Signalish<string | undefined>;
	keytype?: Signalish<string | undefined>;
	keyType?: Signalish<string | undefined>;
	keyparams?: Signalish<string | undefined>;
	keyParams?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
}

export interface LabelHTMLAttributes<
	T extends EventTarget = HTMLLabelElement
> extends HTMLAttributes<T> {
	for?: Signalish<string | undefined>;
	form?: Signalish<string | undefined>;
	htmlFor?: Signalish<string | undefined>;
	role?: never;
}

export interface LegendHTMLAttributes<
	T extends EventTarget = HTMLLegendElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface LiHTMLAttributes<
	T extends EventTarget = HTMLLIElement
> extends HTMLAttributes<T> {
	value?: Signalish<string | number | undefined>;
}

export interface LinkHTMLAttributes<
	T extends EventTarget = HTMLLinkElement
> extends HTMLAttributes<T> {
	as?: Signalish<string | undefined>;
	crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
	crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
	fetchpriority?: Signalish<'high' | 'low' | 'auto' | undefined>;
	fetchPriority?: Signalish<'high' | 'low' | 'auto' | undefined>;
	href?: Signalish<string | undefined>;
	hreflang?: Signalish<string | undefined>;
	hrefLang?: Signalish<string | undefined>;
	integrity?: Signalish<string | undefined>;
	media?: Signalish<string | undefined>;
	imageSrcSet?: Signalish<string | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	rel?: Signalish<string | undefined>;
	role?: never;
	sizes?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
	charset?: Signalish<string | undefined>;
	charSet?: Signalish<string | undefined>;
}

export interface MainHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<'main' | undefined>;
}

export interface MapHTMLAttributes<
	T extends EventTarget = HTMLMapElement
> extends HTMLAttributes<T> {
	name?: Signalish<string | undefined>;
	role?: never;
}

export interface MarqueeHTMLAttributes<
	T extends EventTarget = HTMLMarqueeElement
> extends HTMLAttributes<T> {
	behavior?: Signalish<'scroll' | 'slide' | 'alternate' | undefined>;
	bgcolor?: Signalish<string | undefined>;
	bgColor?: Signalish<string | undefined>;
	direction?: Signalish<'left' | 'right' | 'up' | 'down' | undefined>;
	height?: Signalish<number | string | undefined>;
	hspace?: Signalish<number | string | undefined>;
	loop?: Signalish<number | string | undefined>;
	scrollamount?: Signalish<number | string | undefined>;
	scrollAmount?: Signalish<number | string | undefined>;
	scrolldelay?: Signalish<number | string | undefined>;
	scrollDelay?: Signalish<number | string | undefined>;
	truespeed?: Signalish<boolean | undefined>;
	trueSpeed?: Signalish<boolean | undefined>;
	vspace?: Signalish<number | string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface MediaHTMLAttributes<
	T extends EventTarget = HTMLMediaElement
> extends HTMLAttributes<T> {
	autoplay?: Signalish<boolean | undefined>;
	autoPlay?: Signalish<boolean | undefined>;
	controls?: Signalish<boolean | undefined>;
	controlslist?: Signalish<string | undefined>;
	controlsList?: Signalish<string | undefined>;
	crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
	crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
	currentTime?: Signalish<number | undefined>;
	defaultMuted?: Signalish<boolean | undefined>;
	defaultPlaybackRate?: Signalish<number | undefined>;
	disableremoteplayback?: Signalish<boolean | undefined>;
	disableRemotePlayback?: Signalish<boolean | undefined>;
	loop?: Signalish<boolean | undefined>;
	mediaGroup?: Signalish<string | undefined>;
	muted?: Signalish<boolean | undefined>;
	playbackRate?: Signalish<number | undefined>;
	preload?: Signalish<'auto' | 'metadata' | 'none' | undefined>;
	preservesPitch?: Signalish<boolean | undefined>;
	src?: Signalish<string | undefined>;
	srcObject?: Signalish<MediaStream | MediaSource | Blob | File | null>;
	volume?: Signalish<string | number | undefined>;
}

export interface MenuHTMLAttributes<
	T extends EventTarget = HTMLMenuElement
> extends HTMLAttributes<T> {
	role:
		| 'list'
		| 'group'
		| 'listbox'
		| 'menu'
		| 'menubar'
		| 'none'
		| 'presentation'
		| 'radiogroup'
		| 'tablist'
		| 'toolbar'
		| 'tree';
	type?: Signalish<string | undefined>;
}

export interface MetaHTMLAttributes<
	T extends EventTarget = HTMLMetaElement
> extends HTMLAttributes<T> {
	charset?: Signalish<string | undefined>;
	charSet?: Signalish<string | undefined>;
	content?: Signalish<string | undefined>;
	'http-equiv'?: Signalish<string | undefined>;
	httpEquiv?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
	media?: Signalish<string | undefined>;
	role?: never;
}

export interface MeterHTMLAttributes<
	T extends EventTarget = HTMLMeterElement
> extends HTMLAttributes<T> {
	form?: Signalish<string | undefined>;
	high?: Signalish<number | undefined>;
	low?: Signalish<number | undefined>;
	max?: Signalish<number | string | undefined>;
	min?: Signalish<number | string | undefined>;
	optimum?: Signalish<number | undefined>;
	role?: Signalish<'meter' | undefined>;
	value?: Signalish<string | number | undefined>;
}

export interface NavHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		| 'navigation'
		| 'menu'
		| 'menubar'
		| 'none'
		| 'presentation'
		| 'tablist'
		| undefined
	>;
}

export interface NoScriptHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface ObjectHTMLAttributes<
	T extends EventTarget = HTMLObjectElement
> extends HTMLAttributes<T> {
	classid?: Signalish<string | undefined>;
	classID?: Signalish<string | undefined>;
	data?: Signalish<string | undefined>;
	form?: Signalish<string | undefined>;
	height?: Signalish<number | string | undefined>;
	name?: Signalish<string | undefined>;
	role?: Signalish<'application' | 'document' | 'img' | undefined>;
	type?: Signalish<string | undefined>;
	usemap?: Signalish<string | undefined>;
	useMap?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
	wmode?: Signalish<string | undefined>;
}

export interface OlHTMLAttributes<
	T extends EventTarget = HTMLOListElement
> extends HTMLAttributes<T> {
	reversed?: Signalish<boolean | undefined>;
	role?: Signalish<
		| 'list'
		| 'group'
		| 'listbox'
		| 'menu'
		| 'menubar'
		| 'none'
		| 'presentation'
		| 'radiogroup'
		| 'tablist'
		| 'toolbar'
		| 'tree'
		| undefined
	>;
	start?: Signalish<number | undefined>;
	type?: Signalish<'1' | 'a' | 'A' | 'i' | 'I' | undefined>;
}

export interface OptgroupHTMLAttributes<
	T extends EventTarget = HTMLOptGroupElement
> extends HTMLAttributes<T> {
	disabled?: Signalish<boolean | undefined>;
	label?: Signalish<string | undefined>;
	role?: Signalish<'group' | undefined>;
}

export interface OptionHTMLAttributes<
	T extends EventTarget = HTMLOptionElement
> extends HTMLAttributes<T> {
	disabled?: Signalish<boolean | undefined>;
	label?: Signalish<string | undefined>;
	role?: Signalish<'option' | undefined>;
	selected?: Signalish<boolean | undefined>;
	value?: Signalish<string | number | undefined>;
}

export interface OutputHTMLAttributes<
	T extends EventTarget = HTMLOutputElement
> extends HTMLAttributes<T> {
	for?: Signalish<string | undefined>;
	form?: Signalish<string | undefined>;
	htmlFor?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
}

export interface ParamHTMLAttributes<
	T extends EventTarget = HTMLParamElement
> extends HTMLAttributes<T> {
	name?: Signalish<string | undefined>;
	role?: never;
	value?: Signalish<string | number | undefined>;
}

export interface PictureHTMLAttributes<
	T extends EventTarget = HTMLPictureElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface ProgressHTMLAttributes<
	T extends EventTarget = HTMLProgressElement
> extends HTMLAttributes<T> {
	max?: Signalish<number | string | undefined>;
	role?: Signalish<'progressbar' | undefined>;
	value?: Signalish<string | number | undefined>;
}

export interface QuoteHTMLAttributes<
	T extends EventTarget = HTMLQuoteElement
> extends HTMLAttributes<T> {
	cite?: Signalish<string | undefined>;
}

export interface ScriptHTMLAttributes<
	T extends EventTarget = HTMLScriptElement
> extends HTMLAttributes<T> {
	async?: Signalish<boolean | undefined>;
	/** @deprecated */
	charset?: Signalish<string | undefined>;
	/** @deprecated */
	charSet?: Signalish<string | undefined>;
	crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
	crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
	defer?: Signalish<boolean | undefined>;
	integrity?: Signalish<string | undefined>;
	nomodule?: Signalish<boolean | undefined>;
	noModule?: Signalish<boolean | undefined>;
	referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
	role?: never;
	src?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
}

export interface SearchHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		'search' | 'form' | 'group' | 'none' | 'presentation' | 'region' | undefined
	>;
}

export interface PartialSelectHTMLAttributes<
	T extends EventTarget
> extends HTMLAttributes<T> {
	autocomplete?: Signalish<string | undefined>;
	autoComplete?: Signalish<string | undefined>;
	defaultValue?: Signalish<string | number | undefined>;
	disabled?: Signalish<boolean | undefined>;
	form?: Signalish<string | undefined>;
	name?: Signalish<string | undefined>;
	required?: Signalish<boolean | undefined>;
	size?: Signalish<number | undefined>;
	value?: Signalish<string | number | undefined>;
	onChange?: GenericEventHandler<T> | undefined;
}

export type SelectAriaRoles =
	| {
			multiple?: never;
			// Spec states this branch is limited to "no \`multiple\` attribute AND no \`size\` attribute greater than 1".
			// \`1\` as a default, however, caused some web compat issues and forced Firefox to default to \`0\` instead.
			size?: 0 | 1;
			role?: Signalish<'combobox' | 'menu' | undefined>;
	  }
	| {
			multiple?: never;
			size?: SignalLike<0 | 1>;
			role?: Signalish<'combobox' | 'menu' | undefined>;
	  }
	| {
			multiple?: Signalish<boolean | undefined>;
			size?: Signalish<number | undefined>;
			role?: Signalish<'listbox' | undefined>;
	  };

export type SelectHTMLAttributes<T extends EventTarget = HTMLSelectElement> =
	Omit<PartialSelectHTMLAttributes<T>, 'role' | 'size'> & SelectAriaRoles;

export interface LooseSelectHTMLAttributes<
	T extends EventTarget = HTMLSelectElement
> extends PartialSelectHTMLAttributes<T> {
	multiple?: Signalish<boolean | undefined>;
	size?: Signalish<number | undefined>;
	role?: Signalish<'combobox' | 'listbox' | 'menu' | undefined>;
}

export interface SlotHTMLAttributes<
	T extends EventTarget = HTMLSlotElement
> extends HTMLAttributes<T> {
	name?: Signalish<string | undefined>;
	role?: never;
}

export interface SourceHTMLAttributes<
	T extends EventTarget = HTMLSourceElement
> extends HTMLAttributes<T> {
	height?: Signalish<number | string | undefined>;
	media?: Signalish<string | undefined>;
	role?: never;
	sizes?: Signalish<string | undefined>;
	src?: Signalish<string | undefined>;
	srcset?: Signalish<string | undefined>;
	srcSet?: Signalish<string | undefined>;
	type?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface StyleHTMLAttributes<
	T extends EventTarget = HTMLStyleElement
> extends HTMLAttributes<T> {
	media?: Signalish<string | undefined>;
	role?: never;
	scoped?: Signalish<boolean | undefined>;
	type?: Signalish<string | undefined>;
}

export interface TableHTMLAttributes<
	T extends EventTarget = HTMLTableElement
> extends HTMLAttributes<T> {
	cellpadding?: Signalish<string | undefined>;
	cellPadding?: Signalish<string | undefined>;
	cellspacing?: Signalish<string | undefined>;
	cellSpacing?: Signalish<string | undefined>;
	summary?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
}

export interface TdHTMLAttributes<
	T extends EventTarget = HTMLTableCellElement
> extends HTMLAttributes<T> {
	align?: Signalish<
		'left' | 'center' | 'right' | 'justify' | 'char' | undefined
	>;
	colspan?: Signalish<number | undefined>;
	colSpan?: Signalish<number | undefined>;
	headers?: Signalish<string | undefined>;
	rowspan?: Signalish<number | undefined>;
	rowSpan?: Signalish<number | undefined>;
	scope?: Signalish<string | undefined>;
	abbr?: Signalish<string | undefined>;
	height?: Signalish<number | string | undefined>;
	width?: Signalish<number | string | undefined>;
	valign?: Signalish<'top' | 'middle' | 'bottom' | 'baseline' | undefined>;
}

export interface TemplateHTMLAttributes<
	T extends EventTarget = HTMLTemplateElement
> extends HTMLAttributes<T> {
	role?: never;
	shadowrootclonable?: Signalish<boolean | undefined>;
	shadowRootClonable?: Signalish<boolean | undefined>;
	shadowrootdelegatesfocus?: Signalish<boolean | undefined>;
	shadowRootDelegatesFocus?: Signalish<boolean | undefined>;
	shadowrootmode?: Signalish<'open' | 'closed' | undefined>;
	shadowRootMode?: Signalish<'open' | 'closed' | undefined>;
	shadowrootserializable?: Signalish<boolean | undefined>;
	shadowRootSerializable?: Signalish<boolean | undefined>;
}

export interface TextareaHTMLAttributes<
	T extends EventTarget = HTMLTextAreaElement
> extends HTMLAttributes<T> {
	autocomplete?: Signalish<string | undefined>;
	autoComplete?: Signalish<string | undefined>;
	cols?: Signalish<number | undefined>;
	defaultValue?: Signalish<string | number | undefined>;
	dirname?: Signalish<string | undefined>;
	dirName?: Signalish<string | undefined>;
	disabled?: Signalish<boolean | undefined>;
	form?: Signalish<string | undefined>;
	maxlength?: Signalish<number | undefined>;
	maxLength?: Signalish<number | undefined>;
	minlength?: Signalish<number | undefined>;
	minLength?: Signalish<number | undefined>;
	name?: Signalish<string | undefined>;
	placeholder?: Signalish<string | undefined>;
	readonly?: Signalish<boolean | undefined>;
	readOnly?: Signalish<boolean | undefined>;
	required?: Signalish<boolean | undefined>;
	role?: Signalish<'textbox' | undefined>;
	rows?: Signalish<number | undefined>;
	value?: Signalish<string | number | undefined>;
	wrap?: Signalish<string | undefined>;
	onChange?: GenericEventHandler<T> | undefined;
}

export interface ThHTMLAttributes<
	T extends EventTarget = HTMLTableCellElement
> extends HTMLAttributes<T> {
	align?: Signalish<
		'left' | 'center' | 'right' | 'justify' | 'char' | undefined
	>;
	colspan?: Signalish<number | undefined>;
	colSpan?: Signalish<number | undefined>;
	headers?: Signalish<string | undefined>;
	rowspan?: Signalish<number | undefined>;
	rowSpan?: Signalish<number | undefined>;
	scope?: Signalish<string | undefined>;
	abbr?: Signalish<string | undefined>;
}

export interface TimeHTMLAttributes<
	T extends EventTarget = HTMLTimeElement
> extends HTMLAttributes<T> {
	datetime?: Signalish<string | undefined>;
	dateTime?: Signalish<string | undefined>;
}

export interface TitleHTMLAttributes<
	T extends EventTarget = HTMLTitleElement
> extends HTMLAttributes<T> {
	role?: never;
}

export interface TrackHTMLAttributes<
	T extends EventTarget = HTMLTrackElement
> extends MediaHTMLAttributes<T> {
	default?: Signalish<boolean | undefined>;
	kind?: Signalish<string | undefined>;
	label?: Signalish<string | undefined>;
	role?: never;
	srclang?: Signalish<string | undefined>;
	srcLang?: Signalish<string | undefined>;
}

export interface UlHTMLAttributes<
	T extends EventTarget = HTMLUListElement
> extends HTMLAttributes<T> {
	role?: Signalish<
		| 'list'
		| 'group'
		| 'listbox'
		| 'menu'
		| 'menubar'
		| 'none'
		| 'presentation'
		| 'radiogroup'
		| 'tablist'
		| 'toolbar'
		| 'tree'
		| undefined
	>;
}

export interface VideoHTMLAttributes<
	T extends EventTarget = HTMLVideoElement
> extends MediaHTMLAttributes<T> {
	disablepictureinpicture?: Signalish<boolean | undefined>;
	disablePictureInPicture?: Signalish<boolean | undefined>;
	height?: Signalish<number | string | undefined>;
	playsinline?: Signalish<boolean | undefined>;
	playsInline?: Signalish<boolean | undefined>;
	poster?: Signalish<string | undefined>;
	width?: Signalish<number | string | undefined>;
	role?: Signalish<'application' | undefined>;
}

export interface WbrHTMLAttributes<
	T extends EventTarget = HTMLElement
> extends HTMLAttributes<T> {
	role?: Signalish<'none' | 'presentation' | undefined>;
}

export type DetailedHTMLProps<
	HA extends HTMLAttributes<RefType>,
	RefType extends EventTarget = EventTarget
> = HA;

export interface MathMLAttributes<
	Target extends EventTarget = MathMLElement
> extends HTMLAttributes<Target> {
	dir?: Signalish<'ltr' | 'rtl' | undefined>;
	displaystyle?: Signalish<boolean | undefined>;
	/** @deprecated This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/href  */
	href?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathbackground */
	mathbackground?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathcolor */
	mathcolor?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathsize */
	mathsize?: Signalish<string | undefined>;
	nonce?: Signalish<string | undefined>;
	scriptlevel?: Signalish<string | undefined>;
}

export interface AnnotationMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	encoding?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
	src?: Signalish<string | undefined>;
}

export interface AnnotationXmlMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	encoding?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
	src?: Signalish<string | undefined>;
}

export interface MActionMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype */
	actiontype?: Signalish<'statusline' | 'toggle' | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection */
	selection?: Signalish<string | undefined>;
}

export interface MathMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	display?: Signalish<'block' | 'inline' | undefined>;
}

export interface MEncloseMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	notation?: Signalish<string | undefined>;
}

export interface MErrorMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MFencedMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	close?: Signalish<string | undefined>;
	open?: Signalish<string | undefined>;
	separators?: Signalish<string | undefined>;
}

export interface MFracMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
	denomalign?: Signalish<'center' | 'left' | 'right' | undefined>;
	linethickness?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
	numalign?: Signalish<'center' | 'left' | 'right' | undefined>;
}

export interface MiMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** The only value allowed in the current specification is normal (case insensitive)
	 * See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi#mathvariant */
	mathvariant?: Signalish<
		| 'normal'
		| 'bold'
		| 'italic'
		| 'bold-italic'
		| 'double-struck'
		| 'bold-fraktur'
		| 'script'
		| 'bold-script'
		| 'fraktur'
		| 'sans-serif'
		| 'bold-sans-serif'
		| 'sans-serif-italic'
		| 'sans-serif-bold-italic'
		| 'monospace'
		| 'initial'
		| 'tailed'
		| 'looped'
		| 'stretched'
		| undefined
	>;
}

export interface MmultiScriptsMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#subscriptshift */
	subscriptshift?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#superscriptshift */
	superscriptshift?: Signalish<string | undefined>;
}

export interface MNMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MOMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo#accent */
	accent?: Signalish<boolean | undefined>;
	fence?: Signalish<boolean | undefined>;
	largeop?: Signalish<boolean | undefined>;
	lspace?: Signalish<string | undefined>;
	maxsize?: Signalish<string | undefined>;
	minsize?: Signalish<string | undefined>;
	movablelimits?: Signalish<boolean | undefined>;
	rspace?: Signalish<string | undefined>;
	separator?: Signalish<boolean | undefined>;
	stretchy?: Signalish<boolean | undefined>;
	symmetric?: Signalish<boolean | undefined>;
}

export interface MOverMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	accent?: Signalish<boolean | undefined>;
}

export interface MPaddedMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	depth?: Signalish<string | undefined>;
	height?: Signalish<string | undefined>;
	lspace?: Signalish<string | undefined>;
	voffset?: Signalish<string | undefined>;
	width?: Signalish<string | undefined>;
}

export interface MPhantomMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MPrescriptsMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MRootMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MRowMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MSMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
	lquote?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
	rquote?: Signalish<string | undefined>;
}

export interface MSpaceMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	depth?: Signalish<string | undefined>;
	height?: Signalish<string | undefined>;
	width?: Signalish<string | undefined>;
}

export interface MSqrtMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MStyleMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#background */
	background?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#color */
	color?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontsize */
	fontsize?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontstyle */
	fontstyle?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontweight */
	fontweight?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptminsize */
	scriptminsize?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptsizemultiplier */
	scriptsizemultiplier?: Signalish<string | undefined>;
}

export interface MSubMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub#subscriptshift */
	subscriptshift?: Signalish<string | undefined>;
}

export interface MSubsupMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#subscriptshift */
	subscriptshift?: Signalish<string | undefined>;
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#superscriptshift */
	superscriptshift?: Signalish<string | undefined>;
}

export interface MSupMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msup#superscriptshift */
	superscriptshift?: Signalish<string | undefined>;
}

export interface MTableMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#align */
	align?: Signalish<
		'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
	>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign */
	columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines */
	columnlines?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnspacing */
	columnspacing?: Signalish<string | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#frame */
	frame?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#framespacing */
	framespacing?: Signalish<string | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowalign */
	rowalign?: Signalish<
		'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
	>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines */
	rowlines?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowspacing */
	rowspacing?: Signalish<string | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#width */
	width?: Signalish<string | undefined>;
}

export interface MTdMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	columnspan?: Signalish<number | undefined>;
	rowspan?: Signalish<number | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign */
	columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign */
	rowalign?: Signalish<
		'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
	>;
}

export interface MTextMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}

export interface MTrMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign */
	columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign */
	rowalign?: Signalish<
		'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
	>;
}

export interface MUnderMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	accentunder?: Signalish<boolean | undefined>;
}

export interface MUnderoverMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {
	accent?: Signalish<boolean | undefined>;
	accentunder?: Signalish<boolean | undefined>;
}

export interface SemanticsMathMLAttributes<
	T extends EventTarget
> extends MathMLAttributes<T> {}
`,r=`export as namespace preact;

import { JSXInternal } from './jsx';
import { DOMAttributes, HTMLAttributes, SVGAttributes } from './dom';

export import JSX = JSXInternal;
export * from './dom';

//
// Preact Virtual DOM
// -----------------------------------

export interface VNode<P = {}> {
	type: ComponentType<P> | string;
	props: P & { children: ComponentChildren };
	key: Key;
	/**
	 * ref is not guaranteed by React.ReactElement, for compatibility reasons
	 * with popular react libs we define it as optional too
	 */
	ref?: Ref<any> | null;
	/**
	 * The time this \`vnode\` started rendering. Will only be set when
	 * the devtools are attached.
	 * Default value: \`0\`
	 */
	startTime?: number;
	/**
	 * The time that the rendering of this \`vnode\` was completed. Will only be
	 * set when the devtools are attached.
	 * Default value: \`-1\`
	 */
	endTime?: number;
}

//
// Preact Component interface
// -----------------------------------

export type Key = string | number | any;

export type RefObject<T> = { current: T };
export type RefCallback<T> = (instance: T | null) => void | (() => void);
export type Ref<T> = RefCallback<T> | RefObject<T | null> | null;

export type ComponentChild =
	| VNode<any>
	| object
	| string
	| number
	| bigint
	| boolean
	| null
	| undefined;
export type ComponentChildren = ComponentChild[] | ComponentChild;

export interface Attributes {
	key?: Key | undefined;
	jsx?: boolean | undefined;
}

export interface ClassAttributes<T> extends Attributes {
	ref?: Ref<T>;
}

export interface PreactDOMAttributes {
	children?: ComponentChildren;
	dangerouslySetInnerHTML?: {
		__html: Parameters<DOMParser['parseFromString']>[0];
	};
}

export interface ErrorInfo {
	componentStack?: string;
}

export type RenderableProps<P, RefType = any> = P &
	Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<RefType> }>;

export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
export type ComponentFactory<P = {}> = ComponentType<P>;

export type ComponentProps<
	C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements
> =
	C extends ComponentType<infer P>
		? P
		: C extends keyof JSXInternal.IntrinsicElements
			? JSXInternal.IntrinsicElements[C]
			: {};

export interface FunctionComponent<P = {}> {
	(props: RenderableProps<P>, context?: any): ComponentChildren;
	displayName?: string;
}
export interface FunctionalComponent<P = {}> extends FunctionComponent<P> {}

export interface ComponentClass<P = {}, S = {}> {
	new (props: P, context?: any): Component<P, S>;
	displayName?: string;
	contextType?: Context<any>;
	getDerivedStateFromProps?(
		props: Readonly<P>,
		state: Readonly<S>
	): Partial<S> | null;
	getDerivedStateFromError?(error: any): Partial<S> | null;
}
export interface ComponentConstructor<P = {}, S = {}> extends ComponentClass<
	P,
	S
> {}

// Type alias for a component instance considered generally, whether stateless or stateful.
export type AnyComponent<P = {}, S = {}> =
	| FunctionComponent<P>
	| ComponentConstructor<P, S>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface Component<P = {}, S = {}> {
	componentWillMount?(): void;
	componentDidMount?(): void;
	componentWillUnmount?(): void;
	getChildContext?(): object;
	componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
	shouldComponentUpdate?(
		nextProps: Readonly<P>,
		nextState: Readonly<S>,
		nextContext: any
	): boolean;
	componentWillUpdate?(
		nextProps: Readonly<P>,
		nextState: Readonly<S>,
		nextContext: any
	): void;
	getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
	componentDidUpdate?(
		previousProps: Readonly<P>,
		previousState: Readonly<S>,
		snapshot: any
	): void;
	componentDidCatch?(error: any, errorInfo: ErrorInfo): void;
}

export abstract class Component<P, S> {
	constructor(props?: P, context?: any);

	static displayName?: string;
	static contextType?: Context<any>;

	// Static members cannot reference class type parameters. This is not
	// supported in TypeScript. Reusing the same type arguments from \`Component\`
	// will lead to an impossible state where one cannot satisfy the type
	// constraint under no circumstances, see #1356.In general type arguments
	// seem to be a bit buggy and not supported well at the time of this
	// writing with TS 3.3.3333.
	static getDerivedStateFromProps?(
		props: Readonly<object>,
		state: Readonly<object>
	): object | null;
	static getDerivedStateFromError?(error: any): object | null;

	state: Readonly<S>;
	props: RenderableProps<P>;
	context: any;

	// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e836acc75a78cf0655b5dfdbe81d69fdd4d8a252/types/react/index.d.ts#L402
	// // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
	// // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
	setState<K extends keyof S>(
		state:
			| ((
					prevState: Readonly<S>,
					props: Readonly<P>
			  ) => Pick<S, K> | Partial<S> | null)
			| (Pick<S, K> | Partial<S> | null),
		callback?: () => void
	): void;

	forceUpdate(callback?: () => void): void;

	abstract render(
		props?: RenderableProps<P>,
		state?: Readonly<S>,
		context?: any
	): ComponentChildren;
}

//
// Preact createElement
// -----------------------------------

export function createElement(
	type: 'input',
	props:
		| (DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>>;
export function createElement<
	P extends HTMLAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function createElement<
	P extends SVGAttributes<T>,
	T extends HTMLElement
>(
	type: keyof JSXInternal.IntrinsicSVGElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function createElement<T extends HTMLElement>(
	type: string,
	props: (ClassAttributes<T> & HTMLAttributes & SVGAttributes) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & HTMLAttributes & SVGAttributes>;
export function createElement<P>(
	type: ComponentType<P> | string,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<P>;
export namespace createElement {
	export import JSX = JSXInternal;
}

export function h(
	type: 'input',
	props:
		| (DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>)
		| null,
	...children: ComponentChildren[]
): VNode<DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>>;
export function h<P extends HTMLAttributes<T>, T extends HTMLElement>(
	type: keyof JSXInternal.IntrinsicElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function h<P extends SVGAttributes<T>, T extends HTMLElement>(
	type: keyof JSXInternal.IntrinsicSVGElements,
	props: (ClassAttributes<T> & P) | null,
	...children: ComponentChildren[]
): VNode<ClassAttributes<T> & P>;
export function h<T extends HTMLElement>(
	type: string,
	props: (ClassAttributes<T> & HTMLAttributes & SVGAttributes) | null,
	...children: ComponentChildren[]
): VNode<(ClassAttributes<T> & HTMLAttributes & SVGAttributes) | null>;
export function h<P>(
	type: ComponentType<P> | string,
	props: (Attributes & P) | null,
	...children: ComponentChildren[]
): VNode<Attributes & P>;
export namespace h {
	export import JSX = JSXInternal;
}

//
// Preact render
// -----------------------------------
export interface ContainerNode {
	readonly nodeType: number;
	readonly parentNode: ContainerNode | null;
	readonly firstChild: ContainerNode | null;
	readonly childNodes: ArrayLike<ContainerNode>;

	insertBefore(node: ContainerNode, child: ContainerNode | null): ContainerNode;
	appendChild(node: ContainerNode): ContainerNode;
	removeChild(child: ContainerNode): ContainerNode;
}

export function render(vnode: ComponentChild, parent: ContainerNode): void;
export function hydrate(vnode: ComponentChild, parent: ContainerNode): void;
export function createPortal(
	vnode: ComponentChildren,
	container: ContainerNode
): VNode<any>;
export function cloneElement(
	vnode: VNode<any>,
	props?: any,
	...children: ComponentChildren[]
): VNode<any>;
export function cloneElement<P>(
	vnode: VNode<P>,
	props?: any,
	...children: ComponentChildren[]
): VNode<P>;

//
// Preact Built-in Components
// -----------------------------------

// TODO: Revisit what the public type of this is...
export const Fragment: FunctionComponent<{}>;

//
// Preact options
// -----------------------------------

/**
 * Global options for preact
 */
export interface Options {
	/** Attach a hook that is invoked whenever a VNode is created. */
	vnode?(vnode: VNode): void;
	/** Attach a hook that is invoked immediately before a vnode is unmounted. */
	unmount?(vnode: VNode): void;
	/** Attach a hook that is invoked after a vnode has rendered. */
	diffed?(vnode: VNode): void;
	event?(e: Event): any;
	requestAnimationFrame?(callback: () => void): void;
	debounceRendering?(cb: () => void): void;
	useDebugValue?(value: string | number): void;
	_addHookName?(name: string | number): void;
	__suspenseDidResolve?(vnode: VNode, cb: () => void): void;
	// __canSuspenseResolve?(vnode: VNode, cb: () => void): void;

	/**
	 * Customize attribute serialization when a precompiled JSX transform
	 * is used.
	 */
	attr?(name: string, value: any): string | void;
}

export const options: Options;

//
// Preact helpers
// -----------------------------------
export function createRef<T>(): RefObject<T | null>;
export function toChildArray(
	children: ComponentChildren
): Array<VNode | string | number>;
export function isValidElement(vnode: any): vnode is VNode;

//
// Context
// -----------------------------------
export interface Consumer<T> extends FunctionComponent<{
	children: (value: T) => ComponentChildren;
}> {}
export interface PreactConsumer<T> extends Consumer<T> {}

export interface Provider<T> extends FunctionComponent<{
	value: T;
	children?: ComponentChildren;
}> {}
export interface PreactProvider<T> extends Provider<T> {}
export type ContextType<C extends Context<any>> =
	C extends Context<infer T> ? T : never;

export interface Context<T> extends preact.Provider<T> {
	Consumer: preact.Consumer<T>;
	Provider: preact.Provider<T>;
	displayName?: string;
}

export interface PreactContext<T> extends Context<T> {}

export function createContext<T>(defaultValue: T): Context<T>;
`,i=`// Users who only use Preact for SSR might not specify "dom" in their lib in tsconfig.json
/// <reference lib="dom" />

import * as preact from './index';

type Defaultize<Props, Defaults> =
	// Distribute over unions
	Props extends any // Make any properties included in Default optional
		? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> & // Include the remaining properties from Props
				Pick<Props, Exclude<keyof Props, keyof Defaults>>
		: never;

export namespace JSXInternal {
	export type LibraryManagedAttributes<Component, Props> = Component extends {
		defaultProps: infer Defaults;
	}
		? Defaultize<Props, Defaults>
		: Props;

	export interface IntrinsicAttributes {
		key?: any;
	}

	export type ElementType<P = any> =
		| {
				[K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
					? K
					: never;
		  }[keyof IntrinsicElements]
		| preact.ComponentType<P>;
	export interface Element extends preact.VNode<any> {}
	export type ElementClass =
		| preact.Component<any, any>
		| preact.FunctionComponent<any>;

	export interface ElementAttributesProperty {
		props: any;
	}

	export interface ElementChildrenAttribute {
		children: any;
	}

	export interface IntrinsicSVGElements {
		svg: preact.SVGAttributes<SVGSVGElement>;
		animate: preact.SVGAttributes<SVGAnimateElement>;
		circle: preact.SVGAttributes<SVGCircleElement>;
		animateMotion: preact.SVGAttributes<SVGAnimateMotionElement>;
		animateTransform: preact.SVGAttributes<SVGAnimateTransformElement>;
		clipPath: preact.SVGAttributes<SVGClipPathElement>;
		defs: preact.SVGAttributes<SVGDefsElement>;
		desc: preact.SVGAttributes<SVGDescElement>;
		ellipse: preact.SVGAttributes<SVGEllipseElement>;
		feBlend: preact.SVGAttributes<SVGFEBlendElement>;
		feColorMatrix: preact.SVGAttributes<SVGFEColorMatrixElement>;
		feComponentTransfer: preact.SVGAttributes<SVGFEComponentTransferElement>;
		feComposite: preact.SVGAttributes<SVGFECompositeElement>;
		feConvolveMatrix: preact.SVGAttributes<SVGFEConvolveMatrixElement>;
		feDiffuseLighting: preact.SVGAttributes<SVGFEDiffuseLightingElement>;
		feDisplacementMap: preact.SVGAttributes<SVGFEDisplacementMapElement>;
		feDistantLight: preact.SVGAttributes<SVGFEDistantLightElement>;
		feDropShadow: preact.SVGAttributes<SVGFEDropShadowElement>;
		feFlood: preact.SVGAttributes<SVGFEFloodElement>;
		feFuncA: preact.SVGAttributes<SVGFEFuncAElement>;
		feFuncB: preact.SVGAttributes<SVGFEFuncBElement>;
		feFuncG: preact.SVGAttributes<SVGFEFuncGElement>;
		feFuncR: preact.SVGAttributes<SVGFEFuncRElement>;
		feGaussianBlur: preact.SVGAttributes<SVGFEGaussianBlurElement>;
		feImage: preact.SVGAttributes<SVGFEImageElement>;
		feMerge: preact.SVGAttributes<SVGFEMergeElement>;
		feMergeNode: preact.SVGAttributes<SVGFEMergeNodeElement>;
		feMorphology: preact.SVGAttributes<SVGFEMorphologyElement>;
		feOffset: preact.SVGAttributes<SVGFEOffsetElement>;
		fePointLight: preact.SVGAttributes<SVGFEPointLightElement>;
		feSpecularLighting: preact.SVGAttributes<SVGFESpecularLightingElement>;
		feSpotLight: preact.SVGAttributes<SVGFESpotLightElement>;
		feTile: preact.SVGAttributes<SVGFETileElement>;
		feTurbulence: preact.SVGAttributes<SVGFETurbulenceElement>;
		filter: preact.SVGAttributes<SVGFilterElement>;
		foreignObject: preact.SVGAttributes<SVGForeignObjectElement>;
		g: preact.SVGAttributes<SVGGElement>;
		image: preact.SVGAttributes<SVGImageElement>;
		line: preact.SVGAttributes<SVGLineElement>;
		linearGradient: preact.SVGAttributes<SVGLinearGradientElement>;
		marker: preact.SVGAttributes<SVGMarkerElement>;
		mask: preact.SVGAttributes<SVGMaskElement>;
		metadata: preact.SVGAttributes<SVGMetadataElement>;
		mpath: preact.SVGAttributes<SVGMPathElement>;
		path: preact.SVGAttributes<SVGPathElement>;
		pattern: preact.SVGAttributes<SVGPatternElement>;
		polygon: preact.SVGAttributes<SVGPolygonElement>;
		polyline: preact.SVGAttributes<SVGPolylineElement>;
		radialGradient: preact.SVGAttributes<SVGRadialGradientElement>;
		rect: preact.SVGAttributes<SVGRectElement>;
		set: preact.SVGAttributes<SVGSetElement>;
		stop: preact.SVGAttributes<SVGStopElement>;
		switch: preact.SVGAttributes<SVGSwitchElement>;
		symbol: preact.SVGAttributes<SVGSymbolElement>;
		text: preact.SVGAttributes<SVGTextElement>;
		textPath: preact.SVGAttributes<SVGTextPathElement>;
		tspan: preact.SVGAttributes<SVGTSpanElement>;
		use: preact.SVGAttributes<SVGUseElement>;
		view: preact.SVGAttributes<SVGViewElement>;
	}

	export interface IntrinsicMathMLElements {
		annotation: preact.AnnotationMathMLAttributes<MathMLElement>;
		'annotation-xml': preact.AnnotationXmlMathMLAttributes<MathMLElement>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction */
		maction: preact.MActionMathMLAttributes<MathMLElement>;
		math: preact.MathMathMLAttributes<MathMLElement>;
		/** This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/menclose  */
		menclose: preact.MEncloseMathMLAttributes<MathMLElement>;
		merror: preact.MErrorMathMLAttributes<MathMLElement>;
		/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfenced */
		mfenced: preact.MFencedMathMLAttributes<MathMLElement>;
		mfrac: preact.MFracMathMLAttributes<MathMLElement>;
		mi: preact.MiMathMLAttributes<MathMLElement>;
		mmultiscripts: preact.MmultiScriptsMathMLAttributes<MathMLElement>;
		mn: preact.MNMathMLAttributes<MathMLElement>;
		mo: preact.MOMathMLAttributes<MathMLElement>;
		mover: preact.MOverMathMLAttributes<MathMLElement>;
		mpadded: preact.MPaddedMathMLAttributes<MathMLElement>;
		mphantom: preact.MPhantomMathMLAttributes<MathMLElement>;
		mprescripts: preact.MPrescriptsMathMLAttributes<MathMLElement>;
		mroot: preact.MRootMathMLAttributes<MathMLElement>;
		mrow: preact.MRowMathMLAttributes<MathMLElement>;
		ms: preact.MSMathMLAttributes<MathMLElement>;
		mspace: preact.MSpaceMathMLAttributes<MathMLElement>;
		msqrt: preact.MSqrtMathMLAttributes<MathMLElement>;
		mstyle: preact.MStyleMathMLAttributes<MathMLElement>;
		msub: preact.MSubMathMLAttributes<MathMLElement>;
		msubsup: preact.MSubsupMathMLAttributes<MathMLElement>;
		msup: preact.MSupMathMLAttributes<MathMLElement>;
		mtable: preact.MTableMathMLAttributes<MathMLElement>;
		mtd: preact.MTdMathMLAttributes<MathMLElement>;
		mtext: preact.MTextMathMLAttributes<MathMLElement>;
		mtr: preact.MTrMathMLAttributes<MathMLElement>;
		munder: preact.MUnderMathMLAttributes<MathMLElement>;
		munderover: preact.MUnderMathMLAttributes<MathMLElement>;
		semantics: preact.SemanticsMathMLAttributes<MathMLElement>;
	}

	export interface IntrinsicHTMLElements {
		a: preact.AnchorHTMLAttributes<HTMLAnchorElement>;
		abbr: preact.HTMLAttributes<HTMLElement>;
		address: preact.HTMLAttributes<HTMLElement>;
		area: preact.AreaHTMLAttributes<HTMLAreaElement>;
		article: preact.ArticleHTMLAttributes<HTMLElement>;
		aside: preact.AsideHTMLAttributes<HTMLElement>;
		audio: preact.AudioHTMLAttributes<HTMLAudioElement>;
		b: preact.HTMLAttributes<HTMLElement>;
		base: preact.BaseHTMLAttributes<HTMLBaseElement>;
		bdi: preact.HTMLAttributes<HTMLElement>;
		bdo: preact.HTMLAttributes<HTMLElement>;
		big: preact.HTMLAttributes<HTMLElement>;
		blockquote: preact.BlockquoteHTMLAttributes<HTMLQuoteElement>;
		body: preact.HTMLAttributes<HTMLBodyElement>;
		br: preact.BrHTMLAttributes<HTMLBRElement>;
		button: preact.ButtonHTMLAttributes<HTMLButtonElement>;
		canvas: preact.CanvasHTMLAttributes<HTMLCanvasElement>;
		caption: preact.CaptionHTMLAttributes<HTMLTableCaptionElement>;
		cite: preact.HTMLAttributes<HTMLElement>;
		code: preact.HTMLAttributes<HTMLElement>;
		col: preact.ColHTMLAttributes<HTMLTableColElement>;
		colgroup: preact.ColgroupHTMLAttributes<HTMLTableColElement>;
		data: preact.DataHTMLAttributes<HTMLDataElement>;
		datalist: preact.DataListHTMLAttributes<HTMLDataListElement>;
		dd: preact.DdHTMLAttributes<HTMLElement>;
		del: preact.DelHTMLAttributes<HTMLModElement>;
		details: preact.DetailsHTMLAttributes<HTMLDetailsElement>;
		dfn: preact.HTMLAttributes<HTMLElement>;
		dialog: preact.DialogHTMLAttributes<HTMLDialogElement>;
		div: preact.HTMLAttributes<HTMLDivElement>;
		dl: preact.DlHTMLAttributes<HTMLDListElement>;
		dt: preact.DtHTMLAttributes<HTMLElement>;
		em: preact.HTMLAttributes<HTMLElement>;
		embed: preact.EmbedHTMLAttributes<HTMLEmbedElement>;
		fieldset: preact.FieldsetHTMLAttributes<HTMLFieldSetElement>;
		figcaption: preact.FigcaptionHTMLAttributes<HTMLElement>;
		figure: preact.HTMLAttributes<HTMLElement>;
		footer: preact.FooterHTMLAttributes<HTMLElement>;
		form: preact.FormHTMLAttributes<HTMLFormElement>;
		h1: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		h2: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		h3: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		h4: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		h5: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		h6: preact.HeadingHTMLAttributes<HTMLHeadingElement>;
		head: preact.HeadHTMLAttributes<HTMLHeadElement>;
		header: preact.HeaderHTMLAttributes<HTMLElement>;
		hgroup: preact.HTMLAttributes<HTMLElement>;
		hr: preact.HrHTMLAttributes<HTMLHRElement>;
		html: preact.HtmlHTMLAttributes<HTMLHtmlElement>;
		i: preact.HTMLAttributes<HTMLElement>;
		iframe: preact.IframeHTMLAttributes<HTMLIFrameElement>;
		img: preact.ImgHTMLAttributes<HTMLImageElement>;
		input: preact.InputHTMLAttributes<HTMLInputElement>;
		ins: preact.InsHTMLAttributes<HTMLModElement>;
		kbd: preact.HTMLAttributes<HTMLElement>;
		keygen: preact.KeygenHTMLAttributes<HTMLUnknownElement>;
		label: preact.LabelHTMLAttributes<HTMLLabelElement>;
		legend: preact.LegendHTMLAttributes<HTMLLegendElement>;
		li: preact.LiHTMLAttributes<HTMLLIElement>;
		link: preact.LinkHTMLAttributes<HTMLLinkElement>;
		main: preact.MainHTMLAttributes<HTMLElement>;
		map: preact.MapHTMLAttributes<HTMLMapElement>;
		mark: preact.HTMLAttributes<HTMLElement>;
		marquee: preact.MarqueeHTMLAttributes<HTMLMarqueeElement>;
		menu: preact.MenuHTMLAttributes<HTMLMenuElement>;
		menuitem: preact.HTMLAttributes<HTMLUnknownElement>;
		meta: preact.MetaHTMLAttributes<HTMLMetaElement>;
		meter: preact.MeterHTMLAttributes<HTMLMeterElement>;
		nav: preact.NavHTMLAttributes<HTMLElement>;
		noscript: preact.NoScriptHTMLAttributes<HTMLElement>;
		object: preact.ObjectHTMLAttributes<HTMLObjectElement>;
		ol: preact.OlHTMLAttributes<HTMLOListElement>;
		optgroup: preact.OptgroupHTMLAttributes<HTMLOptGroupElement>;
		option: preact.OptionHTMLAttributes<HTMLOptionElement>;
		output: preact.OutputHTMLAttributes<HTMLOutputElement>;
		p: preact.HTMLAttributes<HTMLParagraphElement>;
		param: preact.ParamHTMLAttributes<HTMLParamElement>;
		picture: preact.PictureHTMLAttributes<HTMLPictureElement>;
		pre: preact.HTMLAttributes<HTMLPreElement>;
		progress: preact.ProgressHTMLAttributes<HTMLProgressElement>;
		q: preact.QuoteHTMLAttributes<HTMLQuoteElement>;
		rp: preact.HTMLAttributes<HTMLElement>;
		rt: preact.HTMLAttributes<HTMLElement>;
		ruby: preact.HTMLAttributes<HTMLElement>;
		s: preact.HTMLAttributes<HTMLElement>;
		samp: preact.HTMLAttributes<HTMLElement>;
		script: preact.ScriptHTMLAttributes<HTMLScriptElement>;
		search: preact.SearchHTMLAttributes<HTMLElement>;
		section: preact.HTMLAttributes<HTMLElement>;
		select: preact.SelectHTMLAttributes<HTMLSelectElement>;
		selectedcontent: preact.HTMLAttributes<HTMLElement>;
		slot: preact.SlotHTMLAttributes<HTMLSlotElement>;
		small: preact.HTMLAttributes<HTMLElement>;
		source: preact.SourceHTMLAttributes<HTMLSourceElement>;
		span: preact.HTMLAttributes<HTMLSpanElement>;
		strong: preact.HTMLAttributes<HTMLElement>;
		style: preact.StyleHTMLAttributes<HTMLStyleElement>;
		sub: preact.HTMLAttributes<HTMLElement>;
		summary: preact.HTMLAttributes<HTMLElement>;
		sup: preact.HTMLAttributes<HTMLElement>;
		table: preact.TableHTMLAttributes<HTMLTableElement>;
		tbody: preact.HTMLAttributes<HTMLTableSectionElement>;
		td: preact.TdHTMLAttributes<HTMLTableCellElement>;
		template: preact.TemplateHTMLAttributes<HTMLTemplateElement>;
		textarea: preact.TextareaHTMLAttributes<HTMLTextAreaElement>;
		tfoot: preact.HTMLAttributes<HTMLTableSectionElement>;
		th: preact.ThHTMLAttributes<HTMLTableCellElement>;
		thead: preact.HTMLAttributes<HTMLTableSectionElement>;
		time: preact.TimeHTMLAttributes<HTMLTimeElement>;
		title: preact.TitleHTMLAttributes<HTMLTitleElement>;
		tr: preact.HTMLAttributes<HTMLTableRowElement>;
		track: preact.TrackHTMLAttributes<HTMLTrackElement>;
		u: preact.UlHTMLAttributes<HTMLElement>;
		ul: preact.HTMLAttributes<HTMLUListElement>;
		var: preact.HTMLAttributes<HTMLElement>;
		video: preact.VideoHTMLAttributes<HTMLVideoElement>;
		wbr: preact.WbrHTMLAttributes<HTMLElement>;
	}

	export interface IntrinsicElements
		extends
			IntrinsicSVGElements,
			IntrinsicMathMLElements,
			IntrinsicHTMLElements {}
}
`,a=`/**
 * Public type surface for the **Preact API** available to JSX render notes via
 * \`import { … } from "trilium:preact"\` (which the server rewrites to \`api.preact\`
 * at runtime).
 *
 * Single source of truth shared by the in-editor language service and the
 * \`script-deployer\`, mirroring \`script_api.ts\`. Following the same philosophy,
 * the genuinely useful props (enums, flags, callbacks) are typed precisely while
 * references into the heavy client widget graph (editor instances, bootstrap
 * options, note view scopes, …) are loosened to \`unknown\`/\`Record\`.
 *
 * Preact core (\`h\`, \`Fragment\`, …) and the hooks are NOT declared here — the
 * consumers re-export them straight from the real \`preact\` / \`preact/hooks\`
 * packages. This module only declares the Trilium-specific surface
 * (\`defineWidget\` + the bundled UI components), kept honest against the real
 * \`preactAPI\` by a drift guard in \`frontend_script_api_preact.ts\`.
 *
 * Components are \`export declare const\` (ambient — no runtime value); prop types
 * are intentionally module-private so the only *value* exports are the runtime
 * members, which keeps the drift guard's \`keyof typeof\` clean.
 */
import type { ComponentChild, ComponentChildren, FunctionComponent, RefObject, VNode } from "preact";

/** A CSS style object (loose: property names are not validated). */
type Css = Record<string, string | number>;
/** A Trilium command name (loosened from the client's \`CommandNames\` union). */
type Cmd = string;

interface WidgetDefinition {
    parent: "left-pane" | "center-pane" | "note-detail-pane" | "right-pane";
    render: () => VNode;
    position?: number;
}
export declare function defineWidget(definition: WidgetDefinition): WidgetDefinition & { type: "preact-widget" };
export declare function defineLauncherWidget(definition: { render: () => VNode }): { type: "preact-launcher-widget"; render: () => VNode };

interface ActionButtonProps {
    text: string;
    icon: string;
    className?: string;
    titlePosition?: "top" | "right" | "bottom" | "left";
    triggerCommand?: Cmd;
    noIconActionClass?: boolean;
    frame?: boolean;
    active?: boolean;
    disabled?: boolean;
    onClick?: (e: MouseEvent) => void;
    onAuxClick?: (e: MouseEvent) => void;
    onContextMenu?: (e: MouseEvent) => void;
    style?: Css;
}
export declare const ActionButton: FunctionComponent<ActionButtonProps>;

interface AdmonitionProps {
    type: "warning" | "note" | "caution";
    children?: ComponentChildren;
    className?: string;
    style?: Css;
}
export declare const Admonition: FunctionComponent<AdmonitionProps>;

interface ButtonProps {
    text: string;
    name?: string;
    buttonRef?: RefObject<HTMLButtonElement>;
    className?: string;
    icon?: string;
    keyboardShortcut?: string;
    onClick?: () => void;
    kind?: "primary" | "secondary" | "lowProfile";
    disabled?: boolean;
    size?: "normal" | "small" | "micro";
    style?: Css;
    triggerCommand?: Cmd;
    title?: string;
}
export declare const Button: FunctionComponent<ButtonProps>;

/**
 * Generic FullCalendar wrapper. The full FullCalendar \`CalendarOptions\` surface is loosened here
 * (any option may be passed through); \`calendarRef\` receives the underlying calendar instance.
 */
interface CalendarProps {
    calendarRef?: RefObject<unknown>;
    [option: string]: unknown;
}
export declare const Calendar: FunctionComponent<CalendarProps>;

interface CKEditorApi {
    focus(): void;
    setText(text: string): void;
}
interface CKEditorProps {
    apiRef: RefObject<CKEditorApi | undefined>;
    currentValue?: string;
    className: string;
    tabIndex?: number;
    config: unknown;
    editor: unknown;
    disableNewlines?: boolean;
    disableSpellcheck?: boolean;
    onChange?: (newValue?: string) => void;
    onClick?: (e: MouseEvent, pos?: unknown) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onBlur?: () => void;
    onInitialized?: (editorInstance: unknown) => void;
}
export declare const CKEditor: FunctionComponent<CKEditorProps>;

interface CollapsibleProps {
    title: string;
    children?: ComponentChildren;
    initiallyExpanded?: boolean;
    className?: string;
}
export declare const Collapsible: FunctionComponent<CollapsibleProps>;

interface ExternallyControlledCollapsibleProps {
    title: string;
    children?: ComponentChildren;
    className?: string;
    expanded: boolean | undefined;
    setExpanded(expanded: boolean): void;
}
export declare const ExternallyControlledCollapsible: FunctionComponent<ExternallyControlledCollapsibleProps>;

interface ColorPickerProps {
    currentValue: string | null;
    onChange(newValue: string | null): void;
    presets?: string[];
    disabled?: boolean;
    className?: string;
}
export declare const ColorPicker: FunctionComponent<ColorPickerProps>;

interface DropdownProps {
    id?: string;
    className?: string;
    buttonClassName?: string;
    buttonProps?: Record<string, unknown>;
    children?: ComponentChildren;
    title?: string;
    dropdownContainerStyle?: Css;
    dropdownContainerClassName?: string;
    dropdownContainerRef?: RefObject<HTMLDivElement | null>;
    hideToggleArrow?: boolean;
    iconAction?: boolean;
    noSelectButtonStyle?: boolean;
    disabled?: boolean;
    text?: ComponentChildren;
    onShown?: () => void;
    onHidden?: () => void;
    /** The side of the toggle the popup prefers, as Floating UI names it: \`"top"\`, \`"bottom-start"\`, … */
    placement?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end"
        | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end";
    /**
     * What closes the popup besides Escape and the toggle: \`true\` a click inside and a press
     * outside, \`"inside"\` or \`"outside"\` that one alone, \`false\` neither.
     */
    autoClose?: boolean | "inside" | "outside";
    dropdownRef?: RefObject<unknown>;
    titlePosition?: "top" | "right" | "bottom" | "left";
    titleOptions?: Record<string, unknown>;
    mobileBackdrop?: boolean;
}
/** A menu under a toggle, whose rows are \`FormListItem\`s and the other \`FormList\` rows. */
export declare const Dropdown: FunctionComponent<DropdownProps>;

interface DropdownPanelProps extends DropdownProps {
    /** Caps the panel to the room beside its toggle and scrolls its content inside it. */
    scrollable?: boolean;
}
/** A popup under a toggle for content other than a menu's rows, such as a form or a picker. */
export declare const DropdownPanel: FunctionComponent<DropdownPanelProps>;

interface FormCheckboxProps {
    name?: string;
    label: ComponentChildren;
    hint?: string;
    currentValue: boolean;
    disabled?: boolean;
    onChange(newValue: boolean): void;
    containerStyle?: Css;
}
export declare const FormCheckbox: FunctionComponent<FormCheckboxProps>;

interface FormDropdownListProps<T> extends Omit<DropdownProps, "children"> {
    values: T[];
    keyProperty: keyof T;
    titleProperty: keyof T;
    titleSuffixProperty?: keyof T;
    descriptionProperty?: keyof T;
    currentValue: string;
    onChange(newValue: string): void;
}
export declare function FormDropdownList<T>(props: FormDropdownListProps<T>): VNode<any>;

export declare const FormFileUploadButton: FunctionComponent<Omit<ButtonProps, "onClick"> & { onChange: (files: FileList | null) => void }>;
export declare const FormFileUploadActionButton: FunctionComponent<Omit<ActionButtonProps, "onClick"> & { onChange: (files: FileList | null) => void }>;

interface FormGroupProps {
    name: string;
    labelRef?: RefObject<HTMLLabelElement>;
    label?: string;
    title?: string;
    className?: string;
    error?: string;
    children: VNode<any>;
    description?: ComponentChildren;
    disabled?: boolean;
    style?: Css;
}
export declare const FormGroup: FunctionComponent<FormGroupProps>;

interface FormListItemProps {
    children?: ComponentChildren;
    icon?: string;
    value?: string;
    title?: string;
    active?: boolean;
    badges?: unknown[];
    disabled?: boolean;
    disabledTooltip?: string;
    checked?: boolean | null;
    selected?: boolean;
    container?: boolean;
    onClick?: (e: MouseEvent) => void;
    triggerCommand?: Cmd;
    description?: string;
    className?: string;
    rtl?: boolean;
    postContent?: ComponentChildren;
    itemRef?: RefObject<HTMLLIElement>;
}
export declare const FormListItem: FunctionComponent<FormListItemProps>;

export declare const FormDropdownDivider: FunctionComponent<{}>;

interface FormDropdownSubmenuProps {
    icon: string;
    title: ComponentChildren;
    children?: ComponentChildren;
    onDropdownToggleClicked?: () => void;
}
/**
 * A row that opens its children as a submenu. Outside a \`Dropdown\` menu, its title is shown as a
 * header above them.
 */
export declare const FormDropdownSubmenu: FunctionComponent<FormDropdownSubmenuProps>;

interface FormRadioGroupProps {
    name: string;
    currentValue?: string;
    values: ({ value: string; label: ComponentChildren; inlineDescription?: ComponentChildren } | false)[];
    onChange(newValue: string): void;
}
export declare const FormRadioGroup: FunctionComponent<FormRadioGroupProps>;

export declare const FormText: FunctionComponent<{ children?: ComponentChildren }>;

interface FormTextAreaProps {
    id?: string;
    currentValue: string;
    onChange?(newValue: string): void;
    onBlur?(newValue: string): void;
    inputRef?: RefObject<HTMLTextAreaElement>;
    className?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    readOnly?: boolean;
}
export declare const FormTextArea: FunctionComponent<FormTextAreaProps>;

interface FormTextBoxProps {
    id?: string;
    currentValue?: string;
    onChange?(newValue: string, validity: ValidityState): void;
    onBlur?(newValue: string): void;
    inputRef?: RefObject<HTMLInputElement>;
    type?: string;
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    name?: string;
}
export declare const FormTextBox: FunctionComponent<FormTextBoxProps>;

interface FormToggleProps {
    currentValue: boolean | null;
    onChange(newValue: boolean): void;
    switchOnName?: string;
    switchOnTooltip?: string;
    switchOffName?: string;
    switchOffTooltip?: string;
    helpPage?: string;
    disabled?: boolean;
    afterName?: ComponentChildren;
    id?: string;
}
export declare const FormToggle: FunctionComponent<FormToggleProps>;

interface IconProps {
    icon?: string;
    className?: string;
    onClick?: (e: MouseEvent) => void;
    title?: string;
    style?: Css;
}
export declare const Icon: FunctionComponent<IconProps>;

interface LinkButtonProps {
    onClick?: () => void;
    text: ComponentChild;
    triggerCommand?: Cmd;
}
export declare const LinkButton: FunctionComponent<LinkButtonProps>;

export declare const LoadingSpinner: FunctionComponent<{}>;

interface ModalProps {
    className?: string;
    title?: ComponentChildren;
    customTitleBarButtons?: ({ title: string; iconClassName: string; onClick: (e: MouseEvent) => void } | null)[];
    size: "xl" | "lg" | "md" | "sm";
    children?: ComponentChildren;
    header?: ComponentChildren;
    footer?: ComponentChildren;
    footerStyle?: Css;
    footerAlignment?: "right" | "between";
    minWidth?: string;
    maxWidth?: number;
    zIndex?: number;
    scrollable?: boolean;
    onSubmit?: () => void;
    onShown?: () => void;
    onHidden: () => void;
    helpPageId?: string;
    modalRef?: RefObject<HTMLDivElement>;
    formRef?: RefObject<HTMLFormElement>;
    bodyStyle?: Css;
    show: boolean;
    stackable?: boolean;
    keepInDom?: boolean;
    noFocus?: boolean;
    sidebar?: ComponentChildren;
    isFullPageOnMobile?: boolean;
}
export declare const Modal: FunctionComponent<ModalProps>;

interface NoteAutocompleteProps {
    id?: string;
    inputRef?: RefObject<HTMLInputElement>;
    text?: string;
    placeholder?: string;
    container?: RefObject<HTMLElement | null | undefined>;
    containerStyle?: Css;
    opts?: Record<string, unknown>;
    onChange?: (suggestion: unknown) => void;
    onTextChange?: (text: string) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onBlur?: (newValue: string) => void;
    noteIdChanged?: (noteId: string) => void;
    noteId?: string;
}
export declare const NoteAutocomplete: FunctionComponent<NoteAutocompleteProps>;

interface NoteColorPickerProps {
    /** The target note instance (FNote) or its ID string. */
    note: unknown | string | null;
}
export declare const NoteColorPicker: FunctionComponent<NoteColorPickerProps>;

interface NoteLinkProps {
    className?: string;
    containerClassName?: string;
    notePath: string | string[];
    showNotePath?: boolean;
    showNoteIcon?: boolean;
    style?: Css;
    noPreview?: boolean;
    noTnLink?: boolean;
    highlightedTokens?: string[] | null;
    title?: string;
    viewScope?: unknown;
    noContextMenu?: boolean;
    onContextMenu?: (e: MouseEvent) => void;
}
export declare const NoteLink: FunctionComponent<NoteLinkProps>;

interface RawHtmlProps {
    className?: string;
    html?: string | HTMLElement;
    style?: Css;
    onClick?: (e: MouseEvent) => void;
    tabindex?: number;
    dir?: string;
    containerRef?: RefObject<HTMLSpanElement>;
}
export declare const RawHtml: FunctionComponent<RawHtmlProps>;

interface SliderProps {
    value: number;
    onChange(newValue: number): void;
    min?: number;
    max?: number;
    step?: number;
    title?: string;
}
export declare const Slider: FunctionComponent<SliderProps>;

/**
 * A card whose segments the reader can put in any order, by carrying the grip on a segment or with
 * the keyboard. The order is the caller's: every change is reported through \`onChange\`, and the
 * card draws whatever it is handed back.
 *
 * \`items\` are named by a \`key\` that outlives the order they stand in; \`renderItem\` draws a segment
 * for a card that shows more than a name, and \`itemCreationButtons\` puts a row of buttons at the
 * foot of the card that make another entry, answering with nothing where the reader backs out.
 */
interface SortableItem {
    key: string;
    caption?: ComponentChildren;
    icon?: string;
}
interface ItemCreationButton<T extends SortableItem> {
    label: string;
    icon?: string;
    /** Turns the button off, for a caller that cannot make an entry yet. */
    disabled?: boolean;
    onCreateItem: (event?: MouseEvent) => T | undefined | Promise<T | undefined>;
}
interface SortableCardProps<T extends SortableItem> {
    /** See \`CardProps\`: the words a filter finds the card by, and whether it is filter-only. */
    filterExtraKeywords?: string;
    filterOnly?: boolean;
    items: T[];
    onChange: (items: T[]) => void;
    renderItem?: (item: T, index: number) => ComponentChildren;
    /** Up to three, drawn as a row of buttons at the foot of the card. */
    itemCreationButtons?: ItemCreationButton<T>[];
    /** Which edge of a segment the grip stands on. The trailing one by default. */
    gripPlacement?: "start" | "end";
    /** Whether the reader can reorder the entries. Off, the card has no grip. True by default. */
    isReorderable?: boolean;
    /** Called with the focused entry for a key the card does not handle itself. */
    onItemKeyDown?: (item: T, event: KeyboardEvent) => void;
    selectedKey?: string;
    onSelect?: (key: string) => void;
    heading?: string;
    description?: ComponentChildren;
    actions?: ComponentChildren;
    className?: string;
}
// Generic, as the component itself is: the entries are the caller's own, so what \`onChange\` and
// \`renderItem\` are handed is the caller's type and not what this card asks of it.
export declare const SortableCard: <T extends SortableItem>(props: SortableCardProps<T>) => VNode;

/**
 * Generic Tabulator-based data grid. The full Tabulator \`Options\` surface is loosened here (any option
 * may be passed through); \`data\` is the row array, \`columns\` the column definitions, \`modules\` the
 * Tabulator modules to register, \`events\` the event handlers and \`tabulatorRef\` receives the instance.
 */
interface TableProps {
    tabulatorRef?: RefObject<unknown>;
    className?: string;
    data?: unknown[];
    columns?: unknown[];
    modules?: unknown[];
    events?: Record<string, unknown>;
    index?: string;
    footerElement?: unknown;
    onReady?: () => void;
    [option: string]: unknown;
}
export declare const Table: FunctionComponent<TableProps>;

interface RightPanelWidgetProps {
    id: string;
    title: string;
    children?: ComponentChildren;
    buttons?: ComponentChildren;
    containerRef?: RefObject<HTMLDivElement>;
    contextMenuItems?: unknown[];
    grow?: boolean;
}
export declare const RightPanelWidget: FunctionComponent<RightPanelWidgetProps>;
`;function o(){return JSON.stringify({types:`src/index.d.ts`})}var s={"/node_modules/preact/package.json":o(),"/node_modules/preact/src/index.d.ts":r,"/node_modules/preact/src/jsx.d.ts":i,"/node_modules/preact/src/dom.d.ts":n,"/node_modules/preact/hooks/package.json":o(),"/node_modules/preact/hooks/src/index.d.ts":e,"/node_modules/preact/jsx-runtime/package.json":o(),"/node_modules/preact/jsx-runtime/src/index.d.ts":t},c=`
declare module "trilium:preact" {
    export * from "preact";
    export * from "preact/hooks";
${a.replace(/^export declare /gm,`export `)}
}

declare module "trilium:api" {
    import type { FrontendApi } from "./trilium-script-api";
    // Render notes import members by name (\`import { showMessage } from "trilium:api"\`),
    // which the server rewrites to property access on the \`api\` global at runtime.
    // A destructuring export is the only declaration form that exposes named members
    // (a default/\`export =\` of the object does not).
    export const {
        $container, startNote, currentNote, originEntity, dayjs,
        RightPanelWidget, NoteContextAwareWidget, BasicWidget,
        activateNote, activateNewNote, openTabWithNote, openSplitWithNote,
        runOnBackend, runAsyncOnBackendWithManualTransactionHandling,
        searchForNotes, searchForNote, getNote, getNotes, reloadNotes, getInstanceName,
        addTextToActiveContextEditor, getActiveContextNote, getActiveContext, getActiveMainContext,
        getNoteContexts, getMainNoteContexts, getActiveContextTextEditor, getActiveContextCodeEditor,
        getActiveNoteDetailWidget, getActiveContextNotePath, getComponentByEl,
        showMessage, showError, showInfoDialog, showConfirmDialog, showPromptDialog,
        pickSingleItem,
        createLink, createNoteLink, triggerCommand, triggerEvent, setupElementTooltip,
        protectNote, protectSubTree,
        getTodayNote, getDayNote, getWeekFirstDayNote, getWeekNote, getMonthNote, getQuarterNote, getYearNote,
        setHoistedNoteId, bindGlobalShortcut, waitUntilSynced, refreshIncludedNote,
        randomString, formatSize, formatNoteSize, formatDateISO, parseDate,
        logMessages, logSpacedUpdates, log, preact,
    }: FrontendApi;
}
`;export{s as preactVfsFiles,c as triliumModulesDts};