const AuthenticationController = require("./AuthenticationController");
const applicationConfig  = require("../../config/application");

describe("AuthenticationController", () => {
  let authenticationController;

  beforeEach(() => {
    const userModelMock = {
      findOne: jest.fn(),
      findByPk: jest.fn(),
      create: jest.fn(),
    };

    const roleModelMock = {
      findOne: jest.fn(),
      findByPk: jest.fn(),
    };

    const bcryptMock = {
      hashSync: jest.fn(),
      compareSync: jest.fn(),
    };

    const jwtMock = {
      sign: jest.fn(),
      verify: jest.fn(),
    };

    authenticationController = new AuthenticationController({
      userModel: userModelMock,
      roleModel: roleModelMock,
      bcrypt: bcryptMock,
      jwt: jwtMock,
    });
  });

  describe("accessControl", () => {
    it("should have accessControl property", () => {
      expect(authenticationController.accessControl).toBeTruthy();
    });
  });

  describe("authorize", () => {
    it("should authorize correctly", async () => {
      const req = {
        headers: {
          authorization: "Bearer fakeToken",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      authenticationController.decodeToken = jest.fn().mockReturnValueOnce({ role: { name: "CUSTOMER" } });

      await authenticationController.authorize("CUSTOMER")(req, res, next);

      expect(authenticationController.decodeToken).toHaveBeenCalledWith("fakeToken");
      expect(req.user).toEqual({ role: { name: "CUSTOMER" } });
      expect(next).toHaveBeenCalled();
    });

    it("should handle unauthorized access", async () => {
      const req = {
        headers: {
          authorization: "Bearer fakeToken",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      authenticationController.decodeToken = jest.fn().mockReturnValueOnce({ role: { name: "ADMIN" } });

      await authenticationController.authorize("CUSTOMER")(req, res, next);

      expect(authenticationController.decodeToken).toHaveBeenCalledWith("fakeToken");
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        error: {
          name: "Error",
          message: "Access forbidden!",
          details: {
            reason: "ADMIN is not allowed to perform this operation.",
            role: "ADMIN",
          },
        },
      });
      
    });
  });

  describe("handleLogin", () => {
    it("should handle login successfully", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      const user = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        encryptedPassword: "hashedPassword",
        Role: {
          id: 2,
          name: "CUSTOMER",
        },
      };

      authenticationController.userModel.findOne.mockResolvedValueOnce(user);
      authenticationController.verifyPassword = jest.fn().mockReturnValueOnce(true);
      authenticationController.createTokenFromUser = jest.fn().mockReturnValueOnce("fakeAccessToken");
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleLogin(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ accessToken: "fakeAccessToken" });
    });

    it("should handle error in handleLogin", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      authenticationController.userModel.findOne.mockRejectedValueOnce(new Error("Some error in handleLogin"));
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleLogin(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Some error in handleLogin"));
    });

    it("should handle EmailNotRegisteredError in handleLogin", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      authenticationController.userModel.findOne.mockResolvedValueOnce(null);
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleLogin(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    it("should handle WrongPasswordError in handleLogin", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      const user = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        encryptedPassword: "hashedPassword",
        Role: {
          id: 2,
          name: "CUSTOMER",
        },
      };

      authenticationController.userModel.findOne.mockResolvedValueOnce(user);
      authenticationController.verifyPassword = jest.fn().mockReturnValueOnce(false);
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleLogin(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);

    });

  });

  describe("handleRegister", () => {
    it("should handle user registration successfully", async () => {
      const req = {
        body: {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
        },
      };

      authenticationController.userModel.findOne.mockResolvedValueOnce(null);
      authenticationController.roleModel.findOne.mockResolvedValueOnce({
        id: 2,
        name: "CUSTOMER",
      });
      authenticationController.userModel.create.mockResolvedValueOnce({
        id: 1,
        name: "Test User",
        email: "test@example.com",
        roleId: 2,
      });
      authenticationController.createTokenFromUser = jest.fn().mockReturnValueOnce("fakeAccessToken");
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleRegister(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ accessToken: "fakeAccessToken" });
    });

    it("should handle error in handleRegister", async () => {
      const req = {
        body: {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
        },
      };

      authenticationController.userModel.findOne.mockRejectedValueOnce(new Error("Some error in handleRegister"));
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleRegister(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error("Some error in handleRegister"));
    });

    it("should handle EmailAlreadyTakenError in handleRegister", async () => {
      const req = {
        body: {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
        },
      };

      authenticationController.userModel.findOne.mockResolvedValueOnce({
        id: 1,
        name: "Test User",
        email: "test@example.com",
      });
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      await authenticationController.handleRegister(req, res, next);

    });


  });

  describe("handleGetUser", () => {
    it("should handle successfully getting a user", async () => {
      const mockUser = { id: 1, username: "example", roleId: 1 };
      const mockRole = { id: 1, name: "ADMIN" };
  
      authenticationController.userModel.findByPk.mockResolvedValueOnce(mockUser);
      authenticationController.roleModel.findByPk.mockResolvedValueOnce(mockRole);
  
      const mockRequest = { user: { id: 1 } };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
  
      await authenticationController.handleGetUser(mockRequest, mockResponse);
  
      expect(authenticationController.userModel.findByPk).toHaveBeenCalledWith(mockRequest.user.id);
      expect(authenticationController.roleModel.findByPk).toHaveBeenCalledWith(mockUser.roleId);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });
  
    it("should handle RecordNotFoundError in handleGetUser", async () => {
      const mockRequest = { user: { id: 1 } };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
  
      authenticationController.userModel.findByPk.mockResolvedValueOnce(null);
  
      await authenticationController.handleGetUser(mockRequest, mockResponse);
  
      expect(mockResponse.status).toHaveBeenCalledWith(404);

    });
    
  });
  

  describe("createTokenFromUser", () => {
    // Uji metode createTokenFromUser
    it("should create a token from user and role", () => {
      // Mock JWT_SIGNATURE_KEY dengan jest.replaceProperty
      jest.replaceProperty(applicationConfig, 'JWT_SIGNATURE_KEY', {
        get: jest.fn(() => 'MockedSignature'),
      });

      // Mock hasil dari jwt.sign
      authenticationController.jwt.sign.mockImplementation((data, signature) => `${JSON.stringify(data)}-${signature}`);

      // Buat pengguna dan peran tiruan
      const user = {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        image: "profile.jpg",
      };

      const role = {
        id: 2,
        name: "CUSTOMER",
      };

      const createdToken = authenticationController.createTokenFromUser(user, role);

      // Harapkan bahwa jwt.sign dipanggil dengan parameter yang benar
      expect(authenticationController.jwt.sign).toHaveBeenCalledWith(
        {"email": "test@example.com", "id": 1, "image": "profile.jpg", "name": "Test User", "role": {"id": 2, "name": "CUSTOMER"}},

        'Rahasia'
      );

      // Harapkan bahwa createdToken sesuai dengan format yang diharapkan
      expect(createdToken).toBe(`${JSON.stringify({ ...user, role })}-Rahasia`);
    });
  });



  describe("decodeToken", () => {
    it("should decode a token", () => {
      const token = "fakeToken";
      const decodedToken = { id: 1, name: "Test User", email: "test@example.com" };

      authenticationController.jwt.verify.mockReturnValueOnce(decodedToken);

      const result = authenticationController.decodeToken(token);

      expect(result).toEqual(decodedToken);
    });
  });

  describe("encryptPassword", () => {
    it("should encrypt a password", () => {
      const password = "password123";
      const encryptedPassword = "hashedPassword";

      authenticationController.bcrypt.hashSync.mockReturnValueOnce(encryptedPassword);

      const result = authenticationController.encryptPassword(password);

      expect(authenticationController.bcrypt.hashSync).toHaveBeenCalledWith(password, 10);
      expect(result).toEqual(encryptedPassword);
    });
  });

  describe("verifyPassword", () => {
    it("should verify a password", () => {
      const password = "password123";
      const encryptedPassword = "hashedPassword";

      authenticationController.bcrypt.compareSync.mockReturnValueOnce(true);

      const result = authenticationController.verifyPassword(password, encryptedPassword);

      expect(authenticationController.bcrypt.compareSync).toHaveBeenCalledWith(password, encryptedPassword);
      expect(result).toEqual(true);
    });
  });
});
