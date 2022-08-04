export default interface ITask {
  _id: string;
  title: string;
  description?: string;
  isCompleted: Boolean;
  createdAt: string;
  updatedAt: string;
};
