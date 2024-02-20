export type TWeek = '日' | '一' | '二' | '三' | '四' | '五' | '六'

export type TWorkDay = {
  date: string
  onWork: string
  offWork?: string
  dayOfWeek?: TWeek
}


