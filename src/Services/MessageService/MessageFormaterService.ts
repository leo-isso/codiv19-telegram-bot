class MessageFormater {
  addSpaceToBigStringNumber (number: string): string {
    const reverseNumber = number.split('').reverse().join('')
    const splitedNumber = reverseNumber.match(/.{1,3}/g).join(' ')
    return splitedNumber.split('').reverse().join('')
  }

  addSpaceToMultipleBigStringNumber (numberArray: string[]): string[] {
    return numberArray.map(number => this.addSpaceToBigStringNumber(number))
  }
}

export default MessageFormater
