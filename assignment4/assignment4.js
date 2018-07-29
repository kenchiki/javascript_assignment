'use strict'

/**
 * @classdesc 数値を1ずつ減少しながら合計値を計算
 */
class DecreaseSum {
  /**
   * @constructor
   * @param {number} [numberBeforeSum]
   */
  constructor(numberBeforeSum) {
    this._numberBeforeSum = numberBeforeSum
    this._process = []
  }

  /**
   * 合計値の計算とプロセスを生成
   * @return {object} - {sum: 合計値, process: プロセス文字列}
   */
  calc() {
    this._process = []
    const SUM = this._sum(this._numberBeforeSum)
    const PROCESS = '（' + this._process.join('+') + ' の結果）'
    return { sum: SUM, process: PROCESS }
  }

  /**
   * 経過計算
   * @param {number} [number]
   * @return {number} - 経過の合計値
   */
  _sum(number) {
    if (number === 0) return number
    this._process.push(number)
    return number + this._sum(number - 1)
  }
}

// メイン処理
;(function() {
  const USER_INPUT = Number(window.prompt('数字を入力してください'))

  // ユーザーの入力数値チェック
  if (!(USER_INPUT > 0)) {
    console.log('1以上の数値を入力してください')
    return
  }

  const decreaseSumResult = new DecreaseSum(USER_INPUT).calc()
  console.log(decreaseSumResult.sum + decreaseSumResult.process)
})()
