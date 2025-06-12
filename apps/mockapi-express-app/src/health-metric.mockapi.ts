// import { HealthMetric, Status } from '@pregnancy-journal-monorepo/contract';

enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export type HealthMetric = {
  metric_id: string;
  title: string;
  measurement_unit: string;
  status: Status;
  standard: {
    standard_id: string;
    week: number;
    lowerbound: number;
    upperbound: number;
    who_standard_value: number;
  }[];
  lowerbound_msg: string;
  upperbound_msg: string;
  required: boolean;
};

export const healthMetricListMockData: HealthMetric[] = [
  {
    metric_id: "1",
    title: "Weight",
    measurement_unit: "kg",
    status: Status.ACTIVE,
    standard: [
      {
        standard_id: "1",
        week: 1,
        lowerbound: 2.5,
        upperbound: 4.5,
        who_standard_value: 3.5,
      },
      {
        standard_id: "1",
        week: 2,
        lowerbound: 2.5,
        upperbound: 4.5,
        who_standard_value: 3.5,
      },
      {
        standard_id: "1",
        week: 3,
        lowerbound: 2.5,
        upperbound: 4.5,
        who_standard_value: 3.5,
      },
      {
        standard_id: "1",
        week: 4,
        lowerbound: 2.5,
        upperbound: 4.5,
        who_standard_value: 3.5,
      },
      {
        standard_id: "1",
        week: 5,
        lowerbound: 2.5,
        upperbound: 4.5,
        who_standard_value: 3.5,
      },
    ],
    lowerbound_msg: "Lower bound message",
    upperbound_msg: "Upper bound message",
    required: true,
  },
  {
    metric_id: "2",
    title: "Height",
    measurement_unit: "cm",
    status: Status.ACTIVE,
    standard: [
      {
        standard_id: "2",
        week: 1,
        lowerbound: 45,
        upperbound: 55,
        who_standard_value: 50,
      },
      {
        standard_id: "2",
        week: 2,
        lowerbound: 45,
        upperbound: 55,
        who_standard_value: 50,
      },
      {
        standard_id: "2",
        week: 3,
        lowerbound: 45,
        upperbound: 55,
        who_standard_value: 50,
      },
      {
        standard_id: "2",
        week: 4,
        lowerbound: 45,
        upperbound: 55,
        who_standard_value: 50,
      },
      {
        standard_id: "2",
        week: 5,
        lowerbound: 45,
        upperbound: 55,
        who_standard_value: 50,
      },
    ],
    lowerbound_msg: "Lower bound message",
    upperbound_msg: "Upper bound message",
    required: true,
  },
  {
    metric_id: "3",
    title: "Head Circumference",
    measurement_unit: "cm",
    status: Status.ACTIVE,
    standard: [
      {
        standard_id: "3",
        week: 1,
        lowerbound: 30,
        upperbound: 40,
        who_standard_value: 35,
      },
      {
        standard_id: "3",
        week: 2,
        lowerbound: 30,
        upperbound: 40,
        who_standard_value: 35,
      },
      {
        standard_id: "3",
        week: 3,
        lowerbound: 30,
        upperbound: 40,
        who_standard_value: 35,
      },
      {
        standard_id: "3",
        week: 4,
        lowerbound: 30,
        upperbound: 40,
        who_standard_value: 35,
      },
      {
        standard_id: "3",
        week: 5,
        lowerbound: 30,
        upperbound: 40,
        who_standard_value: 35,
      },
    ],
    lowerbound_msg: "Lower bound message",
    upperbound_msg: "Upper bound message",
    required: false,
  },
];
