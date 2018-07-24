'use strict'

/**
 * @classdesc じゃんけんゲーム
 */
class HandGame {
  /**
   * @constructor
   * @param {number} [userHandNum]
   */
  constructor(userHandNum) {
    this._handKind = ['グー', 'チョキ', 'パー']
    this._userHandNum = userHandNum
    this._computerHandNum = this._selectComputerHandNum()
  }

  /**
   * ユーザの手を返す
   * @return {string} - ユーザの手
   */
  userHand() {
    return this._handKind[this._userHandNum]
  }

  /**
   * コンピュータの手を返す
   * @return {string} - コンピュータの手
   */
  computerHand() {
    return this._handKind[this._computerHandNum]
  }

  /**
   * 勝負判定
   * @return {string} - LOSE or DRAW or WIN
   */
  judge() {
    if (this._userHandNum === this._computerHandNum) return 'DRAW'

    const USER_WIN_CONDITION = [1, 2, 0]
    if (USER_WIN_CONDITION[this._userHandNum] === this._computerHandNum) return 'WIN'

    return 'LOSE'
  }

  /**
   * コンピュータの手を選択
   */
  _selectComputerHandNum() {
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
