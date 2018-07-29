'use strict'

/**
 * @classdesc じゃんけんゲーム
 */
class HandGame {
  /**
   * @constructor
   * @param {number} [userHandNumber]
   */
  constructor(userHandNumber) {
    this._handKind = ['グー', 'チョキ', 'パー']
    this._userHandNumber = userHandNumber
    this._computerHandNumber = this._selectComputerHandNumber()
  }

  /**
   * ユーザの手を返す
   * @return {string} - ユーザの手
   */
  userHand() {
    return this._handKind[this._userHandNumber]
  }

  /**
   * コンピュータの手を返す
   * @return {string} - コンピュータの手
   */
  computerHand() {
    return this._handKind[this._computerHandNumber]
  }

  /**
   * 勝負判定
   * @return {string} - LOSE or DRAW or WIN
   */
  judge() {
    if (this._userHandNumber === this._computerHandNumber) return 'DRAW'

    const USER_WIN_CONDITION = [1, 2, 0]
    if (USER_WIN_CONDITION[this._userHandNumber] === this._computerHandNumber) return 'WIN'

    return 'LOSE'
  }

  /**
   * コンピュータの手を選択
   */
  _selectComputerHandNumber() {
    return Math.floor(Math.random() * this._handKind.length)
  }
}

// メイン処理
;(function() {
  ;(function handGamePlay() {
    console.log('「じゃんけん・・・」')
    const USER_INPUT = window.prompt('0.グー 1.チョキ 2.パー')

    // ユーザーの入力チェック
    if (USER_INPUT === null) return
    const USER_HAND_NUM = Number(USER_INPUT)
    if (USER_INPUT === '' || !(USER_HAND_NUM >= 0 && USER_HAND_NUM <= 2)) {
      console.log('0から2の数値を入力してください')
      return handGamePlay()
    }

    const handGame = new HandGame(USER_HAND_NUM)

    // ユーザとコンピュータの手を表示
    console.log('「ぽい！」')
    console.log('＊コンピュータ：' + handGame.computerHand())
    console.log('＊あなた：' + handGame.userHand())

    // 勝負判定を表示（アイコの場合はもう一度やり直し）
    const JUDGE_RESULT = handGame.judge()
    if (JUDGE_RESULT === 'DRAW') {
      console.log('「アイコでしょ！」')
      return handGamePlay()
    }
    if (JUDGE_RESULT === 'WIN') console.log('「あなたの勝ち！」')
    if (JUDGE_RESULT === 'LOSE') console.log('「あなたの負け！」')
  })()
})()
