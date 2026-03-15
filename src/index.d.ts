/******************************************************************************
Copyright (c) NextIcons.com - Represented by Alexandr Virgovič

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
import { FC, SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

export type Icon = FC<IconProps>;

// General Icons
export const Accessibility: Icon;
export const Anchor: Icon;
export const Award: Icon;
export const Box: Icon;
export const Briefcase: Icon;
export const Cast: Icon;
export const Coffee: Icon;
export const Command: Icon;
export const Compass: Icon;
export const CreditCard: Icon;
export const Crosshair: Icon;
export const Delete: Icon;
export const Droplet: Icon;
export const DropletOff: Icon;
export const DropletDouble: Icon;
export const FastForward: Icon;
export const Flag: Icon;
export const Gift: Icon;
export const Globe: Icon;
export const Heart: Icon;
export const House: Icon;
export const Inbox: Icon;
export const Info: Icon;
export const LifeBuoy: Icon;
export const Moon: Icon;
export const MousePointer: Icon;
export const Move: Icon;
export const Music: Icon;
export const Package: Icon;
export const Paperclip: Icon;
export const Pocket: Icon;
export const Power: Icon;
export const Scissors: Icon;
export const Slash: Icon;
export const Sliders: Icon;
export const Smartphone: Icon;
export const Speaker: Icon;
export const Star: Icon;
export const Tag: Icon;
export const Target: Icon;
export const Thermometer: Icon;
export const Truck: Icon;
export const TV: Icon;
export const Umbrella: Icon;
export const Wind: Icon;

// Utils Icons
export const AppWindow: Icon;
export const AppWindowMac: Icon;
export const Bluetooth: Icon;
export const Circle: Icon;
export const Code: Icon;
export const Codepen: Icon;
export const Codesandbox: Icon;
export const Cpu: Icon;
export const Feather: Icon;
export const Database: Icon;
export const Disc: Icon;
export const Grid: Icon;
export const HardDrive: Icon;
export const Hash: Icon;
export const Headphones: Icon;
export const HelpCircle: Icon;
export const Hexagon: Icon;
export const Layers: Icon;
export const Layout: Icon;
export const Lock: Icon;
export const Monitor: Icon;
export const Octagon: Icon;
export const PenTool: Icon;
export const Percent: Icon;
export const Printer: Icon;
export const Radio: Icon;
export const Repeat: Icon;
export const Rewind: Icon;
export const Save: Icon;
export const Search: Icon;
export const Send: Icon;
export const Server: Icon;
export const Settings: Icon;
export const Shuffle: Icon;
export const Sidebar: Icon;
export const SkipBack: Icon;
export const SkipForward: Icon;
export const Square: Icon;
export const StopCircle: Icon;
export const Table: Icon;
export const Tablet: Icon;
export const Terminal: Icon;
export const Tool: Icon;
export const Triangle: Icon;
export const Unlock: Icon;
export const Voicemail: Icon;
export const Watch: Icon;

// Archive Icons
export const Archive: Icon;
export const ArchiveRestore: Icon;

// Plane Icons
export const Airplane: Icon;
export const AirplaneLandLeft: Icon;
export const AirplaneLandRight: Icon;
export const AirplaneMode: Icon;
export const AirplaneModeOff: Icon;
export const AirplaneSeat: Icon;
export const AirplaneTakeOffRight: Icon;
export const AirplaneTakeOffLeft: Icon;

// Charts Icons
export const GraphStats: Icon;
export const BarChart: Icon;
export const BarChart2: Icon;
export const PieChart: Icon;
export const TrendingUp: Icon;
export const TrendingDown: Icon;

// Social Icons
export const Airplay: Icon;
export const Chrome: Icon;
export const Credly: Icon;
export const Discord: Icon;
export const Dribbble: Icon;
export const Email: Icon;
export const Facebook: Icon;
export const Figma: Icon;
export const GitHub: Icon;
export const GitLab: Icon;
export const Google: Icon;
export const Instagram: Icon;
export const LinkedIn: Icon;
export const Mail: Icon;
export const PayPal: Icon;
export const SoundCloud: Icon;
export const Spotify: Icon;
export const Trello: Icon;
export const Twitch: Icon;
export const Twitter: Icon;
export const WhatsApp: Icon;
export const YouTube: Icon;

// Alarm Icons
export const Alarm: Icon;
export const AlarmCheck: Icon;
export const AlarmMinus: Icon;
export const AlarmOff: Icon;
export const AlarmPlus: Icon;
export const Clock: Icon;

// Alert Icons
export const AlertCircle: Icon;
export const AlertOctagon: Icon;
export const AlertTriangle: Icon;

// Text Icons
export const AArrowUp: Icon;
export const AArrowDown: Icon;
export const AlignCenter: Icon;
export const AlignJustify: Icon;
export const AlignLeft: Icon;
export const AlignRight: Icon;
export const Clipboard: Icon;
export const Columns: Icon;
export const Copy: Icon;
export const ExternalLink: Icon;
export const Italic: Icon;
export const MoreHorizontal: Icon;
export const MoreVertical: Icon;
export const TextDown: Icon;
export const TextSize: Icon;
export const TextUp: Icon;
export const Type: Icon;
export const Underline: Icon;

// Camera Icons
export const Aperture: Icon;
export const Camera: Icon;
export const CameraOff: Icon;
export const Crop: Icon;
export const Film: Icon;
export const Image: Icon;
export const ImageDown: Icon;
export const ImageMinus: Icon;
export const ImageOff: Icon;
export const ImagePlay: Icon;
export const ImagePlus: Icon;
export const ImageUp: Icon;
export const ImageScaleDash: Icon;

// Food Icons
export const Apple: Icon;
export const Cookie: Icon;

// Arrow Icons
export const ArrowDown: Icon;
export const ArrowDownCircle: Icon;
export const ArrowDownLeft: Icon;
export const ArrowDownRight: Icon;
export const ArrowLeft: Icon;
export const ArrowLeftCircle: Icon;
export const ArrowRight: Icon;
export const ArrowRightCircle: Icon;
export const ArrowUp: Icon;
export const ArrowUpCircle: Icon;
export const ArrowUpLeft: Icon;
export const ArrowUpRight: Icon;
export const ChevronDown: Icon;
export const ChevronDown2: Icon;
export const ChevronLeft: Icon;
export const ChevronLeft2: Icon;
export const ChevronRight: Icon;
export const ChevronRight2: Icon;
export const ChevronUp: Icon;
export const ChevronUp2: Icon;
export const CornerDownLeft: Icon;
export const CornerDownRight: Icon;
export const CornerLeftDown: Icon;
export const CornerLeftUp: Icon;
export const CornerRightDown: Icon;
export const CornerRightUp: Icon;
export const CornerUpLeft: Icon;
export const CornerUpRight: Icon;
export const ArrowDownBig: Icon;
export const ArrowDownBigDash: Icon;
export const ArrowUpBig: Icon;
export const ArrowUpBigDash: Icon;
export const ArrowRightBig: Icon;
export const ArrowRightBigDash: Icon;
export const ArrowLeftBig: Icon;
export const ArrowLeftBigDash: Icon;

// Battery Icons
export const Battery: Icon;
export const BatteryCharging: Icon;

// Bell Icons
export const Bell: Icon;
export const BellOff: Icon;

// Book Icons
export const Book: Icon;
export const BookOpen: Icon;
export const Bookmark: Icon;

// Bot Icons
export const Bot: Icon;
export const BotOff: Icon;
export const BotSquare: Icon;

// Calendar Icons
export const Calendar: Icon;

// Check Icons
export const Check: Icon;
export const CheckCircle: Icon;
export const CheckSquare: Icon;

// Cloud Icons
export const Cloud: Icon;
export const CloudDrizzle: Icon;
export const CloudLightning: Icon;
export const CloudOff: Icon;
export const CloudRain: Icon;
export const CloudSnow: Icon;

// Technology Icons
export const Deno: Icon;
export const Cloudflare: Icon;
export const Framer: Icon;
export const GoLang: Icon;
export const HTML: Icon;
export const JavaScript: Icon;
export const NodeJs: Icon;
export const NPMJs: Icon;
export const Python: Icon;
export const ReactJs: Icon;
export const RSS: Icon;
export const Slack: Icon;
export const TailwindCSS: Icon;
export const TypeScript: Icon;

// Divide Icons
export const Divide: Icon;
export const DivideCircle: Icon;
export const DivideSquare: Icon;

// Currency Icons
export const Dollar: Icon;
export const Euro: Icon;

// Download Icons
export const Download: Icon;
export const DownloadCloud: Icon;

// Edit Icons
export const Edit: Icon;
export const Edit2: Icon;
export const Edit3: Icon;

// Eye Icons
export const Eye: Icon;
export const EyeOff: Icon;

// File Icons
export const File: Icon;
export const FileMinus: Icon;
export const FilePlus: Icon;
export const FileText: Icon;

// Filter Icons
export const Filter: Icon;
export const List: Icon;

// Folder Icons
export const Folder: Icon;
export const FolderMinus: Icon;
export const FolderPlus: Icon;

// Git Icons
export const GitBranch: Icon;
export const GitCommit: Icon;
export const GitMerge: Icon;
export const GitPullRequest: Icon;

// Key Icon
export const Key: Icon;

// Link Icons
export const Link: Icon;
export const Link2: Icon;

// Loader Icons
export const Loader: Icon;
export const RefreshCcw: Icon;
export const RefreshCw: Icon;
export const RotateCcw: Icon;
export const RotateCw: Icon;

// Login Icons
export const LogIn: Icon;
export const LogOut: Icon;

// Map Icons
export const Map: Icon;
export const MapPin: Icon;

// Maximize Icons
export const Maximize: Icon;
export const Maximize2: Icon;

// Emoji Icons
export const Frown: Icon;
export const Meh: Icon;
export const Smile: Icon;

// Menu Icons
export const Menu: Icon;

// Message Icons
export const MessageCircle: Icon;
export const MessageSquare: Icon;

// Mic Icons
export const Mic: Icon;
export const MicOff: Icon;

// Minimize Icons
export const Minimize: Icon;
export const Minimize2: Icon;

// Minus Icons
export const Minus: Icon;
export const MinusCircle: Icon;
export const MinusSquare: Icon;

// Navigation Icons
export const Navigation: Icon;
export const Navigation2: Icon;

// Pause Icons
export const Pause: Icon;
export const PauseCircle: Icon;

// Phone Icons
export const Phone: Icon;
export const PhoneCall: Icon;
export const PhoneForwarded: Icon;
export const PhoneIncoming: Icon;
export const PhoneMissed: Icon;
export const PhoneOff: Icon;
export const PhoneOutgoing: Icon;

// Play Icons
export const Play: Icon;
export const PlayCircle: Icon;

// Plus Icons
export const Plus: Icon;
export const PlusCircle: Icon;
export const PlusSquare: Icon;

// Share Icons
export const Share: Icon;
export const Share2: Icon;

// Shield Icons
export const Shield: Icon;
export const ShieldOff: Icon;

// Shopping Icons
export const ShoppingCart: Icon;
export const ShoppingBag: Icon;

// Sparkles Icons
export const Sparkles: Icon;
export const Sparkles2: Icon;
export const WandSparkles: Icon;

// Sun Icons
export const Sun: Icon;
export const Sunrise: Icon;
export const Sunset: Icon;

// Thumbs Icons
export const ThumbsDown: Icon;
export const ThumbsUp: Icon;

// Toggle Icons
export const ToggleLeft: Icon;
export const ToggleRight: Icon;

// Trash Icons
export const Trash: Icon;
export const Trash2: Icon;

// Upload Icons
export const Upload: Icon;
export const UploadCloud: Icon;

// User Icons
export const User: Icon;
export const UserCheck: Icon;
export const UserMinus: Icon;
export const UserPlus: Icon;
export const Users: Icon;
export const UserX: Icon;

// Video Icons
export const Video: Icon;
export const VideoOff: Icon;

// Volume Icons
export const Volume: Icon;
export const Volume2: Icon;
export const Volume3: Icon;
export const VolumeX: Icon;

// Wifi Icons
export const Wifi: Icon;
export const WifiOff: Icon;

// X Icons
export const X: Icon;
export const XCircle: Icon;
export const XOctagon: Icon;
export const XSquare: Icon;

// Zap Icon
export const Zap: Icon;
export const ZapOff: Icon;
