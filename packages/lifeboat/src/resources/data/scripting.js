
export const TTMCommandType = [
    { opcode: 0x0020, command: 'SAVE_BACKGROUND' }, // not used
    { opcode: 0x0080, command: 'DRAW_BACKGROUND' },
    { opcode: 0x0110, command: 'PURGE' },
    { opcode: 0x0FF0, command: 'UPDATE' },
    { opcode: 0x1020, command: 'SET_DELAY' },
    { opcode: 0x1050, command: 'SLOT_IMAGE' },
    { opcode: 0x1060, command: 'SLOT_PALETTE' },
    { opcode: 0x1100, command: 'UNKNOWN_0' }, // Scene related?
    { opcode: 0x1110, command: 'SET_SCENE' },
    { opcode: 0x1120, command: 'SET_BACKGROUND' },
    { opcode: 0x1200, command: 'GOTO' }, 
    { opcode: 0x2000, command: 'SET_COLORS' },
    { opcode: 0x2010, command: 'SET_FRAME1' },
    { opcode: 0x2020, command: 'UNKNOWN_3' }, // SET_FRAME2 ???
    { opcode: 0x4000, command: 'SET_CLIP_REGION' },
    { opcode: 0x4110, command: 'FADE_OUT' },
    { opcode: 0x4120, command: 'FADE_IN' },
    { opcode: 0x4200, command: 'SAVE_IMAGE0' },
    { opcode: 0x4210, command: 'SAVE_IMAGE1' },
    { opcode: 0xA000, command: 'UNKNOWN_4' }, // Draw Line related?
    { opcode: 0xA050, command: 'UNKNOWN_5' }, // Draw Line related?
    { opcode: 0xA060, command: 'UNKNOWN_6' }, // Draw Line related?
    { opcode: 0xA0A0, command: 'DRAW_LINE' },
    { opcode: 0xA100, command: 'DRAW_RECT' },
    { opcode: 0xA400, command: 'DRAW_BUBBLE' },
    { opcode: 0xA500, command: 'DRAW_SPRITE' },
    { opcode: 0xA510, command: 'DRAW_SPRITE1' }, // not used
    { opcode: 0xA520, command: 'DRAW_SPRITE_FLIP' },
    { opcode: 0xA530, command: 'DRAW_SPRITE3' }, // not used
    { opcode: 0xA600, command: 'CLEAR_SCREEN' },
    { opcode: 0xB600, command: 'DRAW_SCREEN' },
    { opcode: 0xC020, command: 'LOAD_SAMPLE' },
    { opcode: 0xC030, command: 'SELECT_SAMPLE' },
    { opcode: 0xC040, command: 'DESELECT_SAMPLE' },
    { opcode: 0xC050, command: 'PLAY_SAMPLE' },
    { opcode: 0xC060, command: 'STOP_SAMPLE' },
    { opcode: 0xF010, command: 'LOAD_SCREEN' },
    { opcode: 0xF020, command: 'LOAD_IMAGE' },
    { opcode: 0xF050, command: 'LOAD_PALETTE' },
];

export const ADSCommandType = [
    { opcode: 0x1070, paramSize: 2, command: 'UNKNOWN_0', indent: null },
    { opcode: 0x1330, paramSize: 2, command: 'IF_NOT_PLAYED', indent: 1 },
    { opcode: 0x1350, paramSize: 2, command: 'IF_PLAYED', indent: 1 }, // SKIP_NEXT_IF
    { opcode: 0x1360, paramSize: 2, command: 'IF_NOT_RUNNING', indent: 1 },
    { opcode: 0x1370, paramSize: 2, command: 'IF_RUNNING', indent: 1 },
    { opcode: 0x1420, paramSize: 0, command: 'AND', indent: null },
    { opcode: 0x1430, paramSize: 0, command: 'OR', indent: null },
    { opcode: 0x1510, paramSize: 0, command: 'PLAY_SCENE', indent: 0 },
    { opcode: 0x1520, paramSize: 5, command: 'PLAY_SCENE_2', indent: 0 },
    { opcode: 0x2005, paramSize: 4, command: 'ADD_SCENE', indent: null },
    { opcode: 0x2010, paramSize: 3, command: 'STOP_SCENE', indent: null },
    { opcode: 0x3010, paramSize: 0, command: 'RANDOM_START', indent: 1 },
    { opcode: 0x3020, paramSize: 1, command: 'RANDOM_UNKNOWN_0', indent: null },
    { opcode: 0x30ff, paramSize: 0, command: 'RANDOM_END', indent: -1 },
    { opcode: 0x4000, paramSize: 3, command: 'UNKNOWN_6', indent: null },
    { opcode: 0xf010, paramSize: 0, command: 'FADE_OUT', indent: 0 },
    { opcode: 0xf200, paramSize: 1, command: 'RUN_SCRIPT', indent: 0 },
    { opcode: 0xffff, paramSize: 0, command: 'END' },
    // Add for text script
    { opcode: 0xfff0, paramSize: 0, command: 'END_IF' },
];
