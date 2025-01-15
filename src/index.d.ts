import { FC, SVGAttributes } from "react";

/******************************************************************************
Copyright (c) Alexandr Virgovič.

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

export interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
}

export type Icon = FC<IconProps>;

// All Next-Icons
export const Activity: Icon;
export const Airplay: Icon;
export const AlertCircle: Icon;
export const AlertOctagon: Icon;
export const AlertTriangle: Icon;
export const AlignCenter: Icon;
export const AlignJustify: Icon;
export const AlignLeft: Icon;
export const AlignRight: Icon;
export const Anchor: Icon;
export const Aperture: Icon;
export const Archive: Icon;
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
export const Award: Icon;
export const BarChart: Icon;
export const BarChart2: Icon;
export const Battery: Icon;
export const BatteryCharging: Icon;
export const Bell: Icon;
export const BellOff: Icon;
export const Bluetooth: Icon;
export const Book: Icon;
export const Bookmark: Icon;
export const BookOpen: Icon;
export const Bot: Icon;
export const BotOff: Icon;
export const BotSquare: Icon;
export const Box: Icon;
export const Briefcase: Icon;
export const Calendar: Icon;
export const Camera: Icon;
export const CameraOff: Icon;
export const Cast: Icon;
export const Check: Icon;
export const CheckCircle: Icon;
export const CheckSquare: Icon;
export const ChevronDown: Icon;
export const ChevronDown2: Icon;
export const ChevronLeft: Icon;
export const ChevronLeft2: Icon;
export const ChevronRight: Icon;
export const ChevronRight2: Icon;
export const ChevronUp: Icon;
export const ChevronUp2: Icon;
export const Chrome: Icon;
export const Circle: Icon;
export const Clipboard: Icon;
export const Clock: Icon;
export const Cloud: Icon;
export const CloudDrizzle: Icon;
export const CloudLightning: Icon;
export const CloudOff: Icon;
export const CloudRain: Icon;
export const CloudSnow: Icon;
export const Code: Icon;
export const Codepen: Icon;
export const Codesandbox: Icon;
export const Coffee: Icon;
export const Columns: Icon;
export const Command: Icon;
export const Compass: Icon;
export const Copy: Icon;
export const CornerDownLeft: Icon;
export const CornerDownRight: Icon;
export const CornerLeftDown: Icon;
export const CornerLeftUp: Icon;
export const CornerRightDown: Icon;
export const CornerRightUp: Icon;
export const CornerUpLeft: Icon;
export const CornerUpRight: Icon;
export const Cpu: Icon;
export const CreditCard: Icon;
export const Crop: Icon;
export const Crosshair: Icon;
export const Database: Icon;
export const Delete: Icon;
export const Disc: Icon;
export const Divide: Icon;
export const DivideCircle: Icon;
export const DivideSquare: Icon;
export const DollarSign: Icon;
export const Download: Icon;
export const DownloadCloud: Icon;
export const Dribbble: Icon;
export const Droplet: Icon;
export const Edit: Icon;
export const Edit2: Icon;
export const Edit3: Icon;
export const Email: Icon;
export const ExternalLink: Icon;
export const Eye: Icon;
export const EyeOff: Icon;
export const Facebook: Icon;
export const FastForward: Icon;
export const Feather: Icon;
export const Figma: Icon;
export const File: Icon;
export const FileMinus: Icon;
export const FilePlus: Icon;
export const FileText: Icon;
export const Film: Icon;
export const Filter: Icon;
export const Flag: Icon;
export const Folder: Icon;
export const FolderMinus: Icon;
export const FolderPlus: Icon;
export const Framer: Icon;
export const Frown: Icon;
export const Gift: Icon;
export const GitBranch: Icon;
export const GitCommit: Icon;
export const Github: Icon;
export const Gitlab: Icon;
export const GitMerge: Icon;
export const GitPullRequest: Icon;
export const Globe: Icon;
export const Grid: Icon;
export const HardDrive: Icon;
export const Hash: Icon;
export const Headphones: Icon;
export const Heart: Icon;
export const HelpCircle: Icon;
export const Hexagon: Icon;
export const House: Icon;
export const Image: Icon;
export const Inbox: Icon;
export const Info: Icon;
export const Instagram: Icon;
export const Italic: Icon;
export const Key: Icon;
export const Layers: Icon;
export const Layout: Icon;
export const LifeBuoy: Icon;
export const Link: Icon;
export const Link2: Icon;
export const Linkedin: Icon;
export const List: Icon;
export const Loader: Icon;
export const Lock: Icon;
export const LogIn: Icon;
export const LogOut: Icon;
export const Mail: Icon;
export const Map: Icon;
export const MapPin: Icon;
export const Maximize: Icon;
export const Maximize2: Icon;
export const Meh: Icon;
export const Menu: Icon;
export const MessageCircle: Icon;
export const MessageSquare: Icon;
export const Mic: Icon;
export const MicOff: Icon;
export const Minimize: Icon;
export const Minimize2: Icon;
export const Minus: Icon;
export const MinusCircle: Icon;
export const MinusSquare: Icon;
export const Monitor: Icon;
export const Moon: Icon;
export const MoreHorizontal: Icon;
export const MoreVertical: Icon;
export const MousePointer: Icon;
export const Move: Icon;
export const Music: Icon;
export const Navigation: Icon;
export const Navigation2: Icon;
export const Octagon: Icon;
export const Package: Icon;
export const Paperclip: Icon;
export const Pause: Icon;
export const PauseCircle: Icon;
export const PenTool: Icon;
export const Percent: Icon;
export const Phone: Icon;
export const PhoneCall: Icon;
export const PhoneForwarded: Icon;
export const PhoneIncoming: Icon;
export const PhoneMissed: Icon;
export const PhoneOff: Icon;
export const PhoneOutgoing: Icon;
export const PieChart: Icon;
export const Play: Icon;
export const PlayCircle: Icon;
export const Plus: Icon;
export const PlusCircle: Icon;
export const PlusSquare: Icon;
export const Pocket: Icon;
export const Power: Icon;
export const Printer: Icon;
export const Radio: Icon;
export const RefreshCcw: Icon;
export const RefreshCw: Icon;
export const Repeat: Icon;
export const Rewind: Icon;
export const RotateCcw: Icon;
export const RotateCw: Icon;
export const Rss: Icon;
export const Save: Icon;
export const Scissors: Icon;
export const Search: Icon;
export const Send: Icon;
export const Server: Icon;
export const Settings: Icon;
export const Share: Icon;
export const Share2: Icon;
export const Shield: Icon;
export const ShieldOff: Icon;
export const ShoppingBag: Icon;
export const ShoppingCart: Icon;
export const Shuffle: Icon;
export const Sidebar: Icon;
export const SkipBack: Icon;
export const SkipForward: Icon;
export const Slack: Icon;
export const Slash: Icon;
export const Sliders: Icon;
export const Smartphone: Icon;
export const Smile: Icon;
export const Sparkles: Icon;
export const Sparkles2: Icon;
export const Speaker: Icon;
export const Square: Icon;
export const Star: Icon;
export const StopCircle: Icon;
export const Sun: Icon;
export const Sunrise: Icon;
export const Sunset: Icon;
export const Table: Icon;
export const Tablet: Icon;
export const Tag: Icon;
export const Target: Icon;
export const Terminal: Icon;
export const Thermometer: Icon;
export const ThumbsDown: Icon;
export const ThumbsUp: Icon;
export const ToggleLeft: Icon;
export const ToggleRight: Icon;
export const Tool: Icon;
export const Trash: Icon;
export const Trash2: Icon;
export const Trello: Icon;
export const TrendingDown: Icon;
export const TrendingUp: Icon;
export const Triangle: Icon;
export const Truck: Icon;
export const Tv: Icon;
export const Twitch: Icon;
export const Twitter: Icon;
export const Type: Icon;
export const Umbrella: Icon;
export const Underline: Icon;
export const Unlock: Icon;
export const Upload: Icon;
export const UploadCloud: Icon;
export const User: Icon;
export const UserCheck: Icon;
export const UserMinus: Icon;
export const UserPlus: Icon;
export const Users: Icon;
export const UserX: Icon;
export const Video: Icon;
export const VideoOff: Icon;
export const Voicemail: Icon;
export const Volume: Icon;
export const Volume2: Icon;
export const Volume3: Icon;
export const VolumeX: Icon;
export const WandSparkles: Icon;
export const Watch: Icon;
export const Wifi: Icon;
export const WifiOff: Icon;
export const Wind: Icon;
export const X: Icon;
export const XCircle: Icon;
export const XOctagon: Icon;
export const XSquare: Icon;
export const Youtube: Icon;
export const Zap: Icon;
export const ZapOff: Icon;
export const ZoomIn: Icon;
export const ZoomOut: Icon;
