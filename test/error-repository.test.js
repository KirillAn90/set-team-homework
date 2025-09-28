import { ErrorRepository } from '../src/error-repository';

describe('ErrorRepository class', () => {
    let repository;

    beforeEach(() => {
        repository = new ErrorRepository();
        repository.addError(404, 'Not Found');
        repository.addError(500, 'Internal Server Error');
    });

    test('should return correct error message', () => {
        expect(repository.translate(404)).toBe('Not Found');
        expect(repository.translate(500)).toBe('Internal Server Error');
    });

    test('should return Unknown error for non-existent code', () => {
        expect(repository.translate(403)).toBe('Unknown error');
    });

    test('should add new errors', () => {
        repository.addError(403, 'Forbidden');
        expect(repository.translate(403)).toBe('Forbidden');
    });

    test('should not override existing errors', () => {
        repository.addError(404, 'New Message');
        expect(repository.translate(404)).toBe('Not Found');
    });
});
