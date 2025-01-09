export const mockDb = {
  insert: jest.fn().mockReturnThis(),
  values: jest.fn().mockReturnThis(),
  returning: jest.fn().mockResolvedValue([{ id: '1' }]),
  delete: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  select: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  limit: jest.fn().mockReturnThis(),
  offset: jest.fn().mockReturnThis(),
  $count: jest.fn().mockResolvedValue(10),
};

export const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
};
