export type MySystem = SystemType<PrivSystem>;

interface PrivSystem extends IStoneServerSystem<PrivSystem> {
  stop(): void
}

checkApiLevel(1);
