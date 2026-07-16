export type Motif =
  | 'archive'
  | 'mirror'
  | 'network'
  | 'vertical'
  | 'orbit'
  | 'split'
  | 'crowd'
  | 'void'
  | 'machine'
  | 'maze'
  | 'specimen'

export interface CityDirection {
  motif: Motif
  signal: string
  cnSignal: string
  ink: string
  paper: string
  accent: string
  angle: number
}

type RawDirection = [Motif, string, string, string, string, string, number]

const directions: Record<string, RawDirection> = {
  diomira: ['archive', 'SEPTEMBER / ENVY', '九月黄昏 / 羡慕', '#24140c', '#f1b24a', '#f9e6bd', -3],
  isidora: ['archive', 'DESIRE ARRIVES LATE', '欲望抵达时已成回忆', '#241b30', '#d8c6a7', '#9c56ff', 2],
  dorothea: ['network', 'TWO WAYS TO DESCRIBE', '两种描述 / 一座城', '#072a2a', '#bfe3d0', '#ff5f32', -2],
  zaira: ['archive', 'HISTORY IS THE MEASURE', '历史才是城市的尺度', '#231a18', '#d9c7aa', '#b7352d', 1],
  anastasia: ['machine', 'DESIRE COMMANDS YOU', '欲望命令你劳动', '#31090b', '#ffb39a', '#ff3b1f', -4],
  tamara: ['specimen', 'EVERYTHING POINTS ELSEWHERE', '一切都指向别处', '#101b22', '#e8e2cf', '#f02d3a', 3],
  zora: ['archive', 'MEMORY ERASES WHAT IT HOLDS', '记忆保存，也抹除', '#182337', '#d4d6cf', '#ef8354', 0],
  despina: ['split', 'CAMEL / SHIP', '骆驼 / 船', '#14222f', '#e1c47d', '#e84a27', -1],
  zirma: ['crowd', 'MEMORY MULTIPLIES', '记忆复制景象', '#17151c', '#f0d351', '#e52e71', 4],
  isaura: ['vertical', 'THE LAKE BELOW', '城市之下的湖', '#092431', '#b9e4df', '#00a6a6', 0],
  maurilia: ['archive', 'POSTCARD / CITY', '明信片 / 城市', '#291f16', '#efd8a4', '#d34836', -2],
  fedora: ['specimen', 'ALL POSSIBLE FEDORAS', '所有可能的菲朵拉', '#13233a', '#c8dbef', '#2457ff', 2],
  zoe: ['void', 'NO PLACE HAS A FUNCTION', '所有地点失去名字', '#191919', '#e6e0d5', '#ff4d00', 0],
  zenodia: ['vertical', 'THE HAPPY CITY HAS NO FORM', '幸福之城没有形状', '#2a2110', '#ead889', '#d9622b', 3],
  euphemia: ['network', 'TRADE GOODS / TRADE STORIES', '交换货物 / 交换记忆', '#261315', '#e8b86d', '#b91c1c', -1],
  zobeide: ['maze', 'A CITY BUILT TO TRAP A DREAM', '为困住梦而建造', '#191528', '#eee7dc', '#c3a4ff', -3],
  hypatia: ['specimen', 'THINGS SPEAK ANOTHER LANGUAGE', '事物使用另一种语言', '#052b32', '#c4e6dd', '#ff6b35', 2],
  armilla: ['network', 'PLUMBING WITHOUT HOUSES', '没有房屋，只有水管', '#09272c', '#d5f1e8', '#df4b2f', 0],
  chloe: ['crowd', 'EVERY GAZE, AN UNLIVED LIFE', '每次对视，一生未发生', '#25101e', '#f1c7d6', '#ff2851', 1],
  valdrada: ['mirror', 'EVERY ACT HAS ITS REFLECTION', '每个动作都有倒影', '#071c2d', '#b9dbea', '#ff5e45', 0],
  olivia: ['machine', 'WORDS BUILD A DIFFERENT CITY', '词句建造另一座城市', '#292112', '#e4cf91', '#e66b2e', -2],
  sophronia: ['split', 'HALF PERMANENT / HALF DEPARTS', '一半永驻 / 一半离开', '#1e1830', '#f1dfbd', '#ff3e6c', 2],
  eutropia: ['machine', 'CHANGE CITY, KEEP THE LIFE', '换一座城，重复生活', '#12251d', '#cedbb5', '#e8482d', -1],
  zemrude: ['split', 'LOOK UP / LOOK DOWN', '抬头 / 低头', '#172031', '#d7e6e9', '#f0a52b', 0],
  aglaura: ['archive', 'THE NAME HIDES THE CITY', '传说遮蔽真实', '#261c26', '#e3d2c0', '#bc2f52', 3],
  octavia: ['network', 'A WEB ABOVE THE ABYSS', '深渊上方的蛛网', '#141b22', '#d8d5c8', '#e7462f', -1],
  ersilia: ['network', 'RELATIONS OUTLIVE HOUSES', '关系比房屋活得更久', '#161616', '#ddd8cd', '#ff4d24', 1],
  baucis: ['vertical', 'THE EARTH SEEN FROM ABOVE', '从高处凝视大地', '#18222a', '#dce6d5', '#83a14a', 0],
  leandra: ['crowd', 'TWO GODS IN EVERY HOME', '每间房子里的两种神', '#281b16', '#e9d3b3', '#c75b39', 2],
  melania: ['crowd', 'THE DIALOGUE NEVER ENDS', '角色死去，对话继续', '#211414', '#dfc3ac', '#a8211f', -2],
  esmeralda: ['maze', 'NO SHORTEST PATH', '不存在最短路径', '#06252b', '#bfe2d7', '#ff7849', 2],
  phyllis: ['specimen', 'THE CITY DISAPPEARS WITH USE', '熟悉使城市消失', '#1a2430', '#d8ddda', '#e45c35', -1],
  pyrrha: ['void', 'THE NAME BEFORE THE PLACE', '先有名字，后有地点', '#271a22', '#e9d7c3', '#e23d65', 1],
  adelma: ['mirror', 'EVERY FACE IS A DEAD FACE', '每张脸都是逝者', '#1c1b20', '#cbc5bb', '#98484d', 0],
  eudoxia: ['orbit', 'THE CARPET KNOWS THE TRUE FORM', '地毯知道真实形态', '#23172d', '#edcf87', '#d13370', 3],
  moriana: ['split', 'THE FACE / THE UNDERSIDE', '正面 / 背面', '#10272d', '#d9e9df', '#db4f37', -2],
  clarice: ['archive', 'RUIN REUSES GLORY', '废墟循环使用荣光', '#29231b', '#d8c7a7', '#b8402d', 1],
  eusapia: ['mirror', 'THE DEAD COPY THE LIVING', '死者复制生者', '#171b24', '#c8c8ba', '#8c52ff', 0],
  beersheba: ['vertical', 'HEAVEN ABOVE / HELL BELOW', '天城在上 / 地狱在下', '#261c0d', '#f0d98f', '#6d55ff', 2],
  leonia: ['machine', 'NEW THINGS / GROWING WASTE', '每日崭新 / 垃圾山生长', '#171717', '#ece8dc', '#ff3b1f', -3],
  irene: ['void', 'A CITY ONLY AT A DISTANCE', '只存在于远望中', '#271b2c', '#e7c5cb', '#ff785a', 0],
  argia: ['vertical', 'EARTH IN PLACE OF AIR', '以泥土代替空气', '#211b16', '#b5a48d', '#5c4033', 0],
  thekla: ['machine', 'BUILDING SO DESTRUCTION CANNOT BEGIN', '不停建造，因此不被毁灭', '#132026', '#d7d2bd', '#ff5d32', 2],
  trude: ['machine', 'THE SAME CITY EVERYWHERE', '到处都是同一座城', '#27231d', '#d9d2c5', '#e55b35', 0],
  olinda: ['specimen', 'A CITY GROWS FROM A POINT', '城市从针尖生长', '#172617', '#d7e5b7', '#e24d2e', 3],
  laudomia: ['mirror', 'LIVING / DEAD / UNBORN', '生者 / 死者 / 未生者', '#1d1925', '#d6c8d9', '#ae4b70', -1],
  perinthia: ['orbit', 'PERFECT SKY / MONSTROUS CITY', '完美星图 / 畸形城市', '#111c35', '#d4d8ec', '#ff4e4e', 2],
  procopia: ['crowd', 'THE LANDSCAPE FILLS WITH FACES', '风景被人脸填满', '#21301e', '#dce0be', '#e8572d', -2],
  raissa: ['network', 'A THREAD OF HAPPINESS', '痛苦中穿行的幸福丝线', '#291c22', '#dfcbd0', '#ffbe0b', 1],
  andria: ['orbit', 'CITY AND SKY ALTER EACH OTHER', '城市与星空彼此改变', '#0b1730', '#cbd7ef', '#ffb703', 0],
  cecilia: ['maze', 'THE CITY SWALLOWS THE COUNTRYSIDE', '城市吞没乡野', '#28271d', '#d9d7bd', '#e55232', 2],
  marozia: ['split', 'THE RAT / THE SWALLOW', '老鼠之城 / 燕子之城', '#272226', '#d7d2cf', '#46a8a8', -2],
  penthesilea: ['maze', 'NO EDGE, NO ARRIVAL', '没有边界，也没有抵达', '#201e1b', '#d9d0bf', '#e2683d', 0],
  theodora: ['specimen', 'THE EXCLUDED SPECIES RETURN', '被驱逐的物种归来', '#17231c', '#d1ddc6', '#9d3b28', 3],
  berenice: ['machine', 'JUSTICE INSIDE INJUSTICE INSIDE JUSTICE', '正义藏在不义之中', '#201b1b', '#e0d5ca', '#d62e2e', -1],
}

export const cityDirections = Object.fromEntries(
  Object.entries(directions).map(([name, values]) => [
    name,
    {
      motif: values[0],
      signal: values[1],
      cnSignal: values[2],
      ink: values[3],
      paper: values[4],
      accent: values[5],
      angle: values[6],
    } satisfies CityDirection,
  ])
) as Record<string, CityDirection>
