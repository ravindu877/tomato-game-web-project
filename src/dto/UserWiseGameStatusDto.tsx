export interface UserWiseGameStatusDto {
    id: number
    level: number
    highestScore: number
    attemptCount: number
    currentScore: number
    currentAttemptCount: number
    currentDifficultyLevel: number
    remainingLifeCount: number
    username: string
}