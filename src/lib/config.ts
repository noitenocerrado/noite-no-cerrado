export class Config {
  public readonly env: string
  public readonly firebaseApiKey: string
  public readonly firebaseAuthDomain: string
  public readonly firebaseProjectId: string
  public readonly firebaseStorageBucket: string
  public readonly firebaseAppId: string
  public readonly firebaseMeasurementId: string
  public readonly firebaseMessagingSenderId: string

  constructor() {
    this.env = process.env.NEXT_PUBLIC_ENV as string
    this.firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string
    this.firebaseAuthDomain = process.env
      .NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string
    this.firebaseProjectId = process.env
      .NEXT_PUBLIC_FIREBASE_PROJECT_ID as string
    this.firebaseStorageBucket = process.env
      .NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string
    this.firebaseAppId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string
    this.firebaseMeasurementId = process.env
      .NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string
    this.firebaseMessagingSenderId = process.env
      .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string
  }
}

export const config = new Config()
