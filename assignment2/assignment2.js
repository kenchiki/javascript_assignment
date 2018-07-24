'use strict'

/**
 * @classdesc 英文に含まれる英単語の数をカウント
 */
class CountWords {
  /**
   * @constructor
   * @param {string} [sentence]
   */
  constructor(sentence) {
    this._sentence = sentence
  }

  /**
   * 英文に含まれる英単語の数をカウント
   * @return {array} - カウント情報の連想配列
   */
  count() {
    const COUNTS = []
    const WORDS = this._sentence.split(' ')

    WORDS.forEach(function(word) {
      if (!COUNTS[word]) {
        COUNTS[word] = 0
      }
      COUNTS[word]++
    })

    return COUNTS
  }
}

// メイン処理
;(function() {
  const USER_INPUT = window.prompt('英単語の数をカウントしたい英文を入力してください')

  // ユーザーの英文入力チェック
  if (!(USER_INPUT.length > 1)) {
    console.log('英文を入力してください')
    return
  }

  const COUNT_WORDS = new CountWords(USER_INPUT).count()
  console.log(COUNT_WORDS)
})()
