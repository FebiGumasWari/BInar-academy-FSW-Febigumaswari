const ApplicationController = require('./ApplicationController');
const applicationController = new ApplicationController();

describe("ApplicationController", () => {
    describe("#handleGetRoot", () => {
        it("should return status 200 and message 'BCR API is up and running'", () => {
            const mockRequest = {};

            const mockResponse = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };

            applicationController.handleGetRoot(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                status: "OK",
                message: "BCR API is up and running!",
            });
        });
    });

    describe("#getOffsetFromRequest", () => {
        it("should return the correct offset based on request query parameters", () => {
            const mockRequest = {
                query: {
                    page: 1,
                    pageSize: 10,
                },
            };

            const offset = applicationController.getOffsetFromRequest(mockRequest);

            expect(offset).toBe(0);
        });

        it("should return 0 if page parameter is not provided", () => {
            const mockRequest = {
                query: {
                    pageSize: 10,
                },
            };

            const offset = applicationController.getOffsetFromRequest(mockRequest);

            expect(offset).toBe(0);
        });
        it("should return 0 if page parameter is not provided", () => {
            const mockRequest = {
                query: {
                    page: 10,
                    pageSize: 10,
                },
            };

            const offset = applicationController.getOffsetFromRequest(mockRequest);

            expect(offset).toBe(90);
        });
    });

    describe("#handleNotFound", () => {
        it("should return status 404 and error details for not found", () => {
            const mockRequest = {};

            const mockResponse = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };



            applicationController.handleNotFound(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenCalledWith(404);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: {
                    name: "Error",
                    message: "Not found!",
                    details: {
                        method: undefined,
                        url: undefined,
                    },
                },
            });
        });
    });

    describe("#handleError", () => {
        it("should return status 500 and error details for internal server error", () => {
            const mockError = new Error("Test Error");
            const mockRequest = {};
            const mockResponse = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };

            const next = jest.fn();



            applicationController.handleError(mockError, mockRequest, mockResponse, next);

            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: {
                    name: "Error",
                    message: "Test Error",
                    details: null,
                },
            });
        });
    });

    describe("#buildPaginationObject", () => {
        it("should return the correct pagination object based on request query parameters", () => {
            const mockRequest = {
                query: {
                    page: 2,
                    pageSize: 10,
                },
            };

            const paginationObject = applicationController.buildPaginationObject(mockRequest, 30);

            expect(paginationObject).toEqual({
                page: 2,
                pageCount: 3,
                pageSize: 10,
                count: 30,
            });
        });

        it("should return default pagination object if query parameters are not provided", () => {
            const mockRequest = {
                query: {},
            };

            const paginationObject = applicationController.buildPaginationObject(mockRequest, 30);

            expect(paginationObject).toEqual({
                page: 1,
                pageCount: 3,
                pageSize: 10,
                count: 30,
            });
        });
    });
});
