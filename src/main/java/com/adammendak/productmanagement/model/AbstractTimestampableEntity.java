package com.adammendak.productmanagement.model;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
public class AbstractTimestampableEntity {

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        this.setCreatedAt(this.setUpdatedAt(new Date()));
    }

    @PreUpdate
    protected void onUpdate() {
        this.setUpdatedAt(new Date());
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public Date setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
        return updatedAt;
    }
}
