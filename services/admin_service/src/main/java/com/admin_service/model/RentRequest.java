package com.admin_service.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "rent_request_table")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class RentRequest implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="rr_id", nullable=false, unique=true)
    private Integer id;
    @ManyToOne
    @JoinColumn(name="car_id", referencedColumnName = "cars_id")
    private Cars carId;
    @NotNull
    @Column(name="startDate", nullable = false, unique = true)
    private Date startDate;
    @NotNull
    @Column(name="endDate", nullable = false, unique = true)
    private Date endDate;
    @NotNull
    @Column(name="status", nullable = false, unique = true)
    private boolean status = false;   // false => nije odobren
    @NotNull
    @Column(name="deleted", nullable = false, unique = true)
    private boolean deleted=false;
    public RentRequest() {
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Cars getCarId() {
        return carId;
    }
    public void setCarId(Cars carId) {
        this.carId = carId;
    }
    public Date getStartDate() {
        return startDate;
    }
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public boolean isDeleted() {
        return deleted;
    }
    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}