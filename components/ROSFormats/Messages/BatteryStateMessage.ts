import Header from "../Header";
import ColorSheet from "../ColorSheet";
export default class BatteryStateMessage {
    __color = ColorSheet.colors[0];

    POWER_SUPPLY_STATUS_UNKNOWN = 0
    POWER_SUPPLY_STATUS_CHARGING = 1
    POWER_SUPPLY_STATUS_DISCHARGING = 2
    POWER_SUPPLY_STATUS_NOT_CHARGING = 3
    POWER_SUPPLY_STATUS_FULL = 4

    POWER_SUPPLY_HEALTH_UNKNOWN = 0
    POWER_SUPPLY_HEALTH_GOOD = 1
    POWER_SUPPLY_HEALTH_OVERHEAT = 2
    POWER_SUPPLY_HEALTH_DEAD = 3
    POWER_SUPPLY_HEALTH_OVERVOLTAGE = 4
    POWER_SUPPLY_HEALTH_UNSPEC_FAILURE = 5
    POWER_SUPPLY_HEALTH_COLD = 6
    POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE = 7
    POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE = 8

    POWER_SUPPLY_TECHNOLOGY_UNKNOWN = 0
    POWER_SUPPLY_TECHNOLOGY_NIMH = 1
    POWER_SUPPLY_TECHNOLOGY_LION = 2
    POWER_SUPPLY_TECHNOLOGY_LIPO = 3
    POWER_SUPPLY_TECHNOLOGY_LIFE = 4
    POWER_SUPPLY_TECHNOLOGY_NICD = 5
    POWER_SUPPLY_TECHNOLOGY_LIMN = 6

    header;
    voltage;
    temperature;
    current;
    charge;
    capacity;
    design_capacity;
    percentage;
    power_supply_status;
    power_supply_health;
    power_supply_technology;
    present;
    cell_voltage;
    cell_temperature;
    location;
    serial_number;

    constructor(
        header:Header,
        voltage:number,
        temperature:number,
        current:number,
        charge:number,
        capacity:number,
        design_capacity:number,
        percentage:number,
        power_supply_status:number,
        power_supply_health:number,
        power_supply_technology:number,
        present:boolean,
        cell_voltage:number[],
        cell_temperature:number[],
        location:string,
        serial_number:string
        ){
            this.header = header;
            this.voltage = voltage;
            this.temperature = temperature;
            this.current = current;
            this.charge = charge;
            this.capacity = capacity;
            this.design_capacity = design_capacity;
            this.percentage = percentage;
            this.power_supply_status = power_supply_status;
            this.power_supply_health = power_supply_health;
            this.power_supply_technology = power_supply_technology;
            this.present = present;
            this.cell_voltage = cell_voltage;
            this.cell_temperature = cell_temperature;
            this.location = location;
            this.serial_number = serial_number;
    }
}