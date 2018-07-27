'use strict'

/**
 * @classdesc 数値から連番配列へ変換（数値を条件で特定の文字列に変換）
 */
class FizzBuzzTranslator {
  /**
   * @constructor
   * @param {number} [numberBeforeTranslate]
   */
  constructor(numberBeforeTranslate) {
    this._numberBeforeTranslate = numberBeforeTranslate
  }

  /**
   * 数値から連番配列へ変換（数値は特定の条件で文字列に変換）
   * @return {array}
   */
  translate() {
    const numberRange = this._numberToNumberRange(this._numberBeforeTranslate)
    return numberRange.map(this._numberToDivideString)
  }

  /**
   * 数値の連番配列を作成
   * 例：3と入力した場合は[1, 2]という配列を作成
   * @param {number} [number]
   * @return {array}
   */
  _numberToNumberRange(number) {
    const numberRange = []
    for (let i = 1; i < number; i++) {
      numberRange.push(i)
    }

    return numberRange
  }

  /**
   * 数値を以下の条件で特定の文字列に変換
   * 条件1：3で割り切れるなら、数字の代わりに"Fizz"と変換
   * 条件2：5で割り切れるなら、数字の代わりに"Buzz"と変換
   * 条件3：両方で割り切れるなら、"FizzBuzz"と変換
   * @param {number} [number]
   * @return {string}
   */
  _numberToDivideString(number) {
    const CAN_DIVIDE_3 = number % 3 === 0
    const CAN_DIVIDE_5 = number % 5 === 0

    if (CAN_DIVIDE_3 && CAN_DIVIDE_5) return 'FizzBuzz'
    if (CAN_DIVIDE_3) return 'Fizz'
    if (CAN_DIVIDE_5) return 'Buzz'

    return String(number)
  }
}

// メイン処理
;(function() {
  const USER_INPUT = Number(window.prompt('数字を入力してください'))

  // ユーザーの入力数値チェック
  if (!(USER_INPUT > 1)) {
    console.log('2以上の数値を入力してください')
    return
  }

  const TRANSLATED_NUMBER_RANGE = new FizzBuzzTranslator(USER_INPUT).translate()
  console.log(TRANSLATED_NUMBER_RANGE.join(','))
})()
