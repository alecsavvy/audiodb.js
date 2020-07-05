import AudioDb from './audiodb/AudioDb';

export function create(clientId: String): AudioDb {
    return new AudioDb(clientId);
}

export function createTest(): AudioDb {
    return new AudioDb();
}
