import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import HousePropertiesForm from "../src/components/house-properties-form/house-properties-form";

describe("House Properties Form", () => {
  it("should display house properties form", () => {
    const { index, houseProperty, deleteHouse, updateHouse } = {
      index: 1,
      houseProperty: {
        id: "8675572e-f13f-4579-a63d-668b55063f95",
        numberOfFloors: 1,
        color: "yellow",
      },
      deleteHouse: jest.fn(() => Promise.resolve(true)),
      updateHouse: jest.fn(() =>
        Promise.resolve({
          id: "8675572e-f13f-4579-a63d-668b55063f95",
          numberOfFloors: 1,
          color: "blue",
        })
      ),
    };
    render(
      <HousePropertiesForm
        index={index}
        houseProperty={houseProperty}
        deleteHouse={deleteHouse}
        updateHouse={updateHouse}
      />
    );

    const floorCount = screen.getByTestId(`${houseProperty.id}-floor`)
    const color = screen.getByTestId(`${houseProperty.id}-color`)
    expect(floorCount.value).toBe("1")
    expect(color.value).toBe("yellow")
  });

  it("should update house properties", async () => {
    const { index, houseProperty, deleteHouse, updateHouse } = {
      index: 1,
      houseProperty: {
        id: "8675572e-f13f-4579-a63d-668b55063f95",
        numberOfFloors: 1,
        color: "yellow",
      },
      deleteHouse: jest.fn(() => Promise.resolve(true)),
      updateHouse: jest.fn(() =>
        Promise.resolve({
          id: "8675572e-f13f-4579-a63d-668b55063f95",
          numberOfFloors: 1,
          color: "blue",
        })
      ),
    };
    render(
      <HousePropertiesForm
        index={index}
        houseProperty={houseProperty}
        deleteHouse={deleteHouse}
        updateHouse={updateHouse}
      />
    );

    const selectedColor = screen.getAllByRole('option', { name: 'blue' })[0]

    await userEvent.selectOptions(
      screen.getByTestId(`${houseProperty.id}-color`),
      selectedColor
    )
    
    expect(selectedColor.selected).toBe(true)
    expect(updateHouse).toHaveBeenCalled()
  });

  it("should delete house properties", async () => {
    const { index, houseProperty, deleteHouse, updateHouse } = {
      index: 1,
      houseProperty: {
        id: "8675572e-f13f-4579-a63d-668b55063f95",
        numberOfFloors: 1,
        color: "yellow",
      },
      deleteHouse: jest.fn(() => Promise.resolve(true)),
      updateHouse: jest.fn(() =>
        Promise.resolve({
          id: "8675572e-f13f-4579-a63d-668b55063f95",
          numberOfFloors: 1,
          color: "blue",
        })
      ),
    };
    render(
      <HousePropertiesForm
        index={index}
        houseProperty={houseProperty}
        deleteHouse={deleteHouse}
        updateHouse={updateHouse}
      />
    );

    const deleteHouseProperty = screen.getByTestId(`${houseProperty.id}-delete`)
    await userEvent.click(deleteHouseProperty)

    expect(deleteHouse).toHaveBeenCalled()
  });
});
